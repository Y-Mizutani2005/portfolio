import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Default configuration
const DEFAULT_USERNAME = "Y-Mizutani2005";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || DEFAULT_USERNAME;

    if (!process.env.GITHUB_TOKEN) {
        return NextResponse.json(
            { error: "GITHUB_TOKEN is not defined in environment variables" },
            { status: 500 }
        );
    }

    // Calculate date range for the current year dynamically
    const year = new Date().getFullYear();
    const from = `${year}-01-01T00:00:00Z`;
    // Set 'to' to the current time to avoid fetching future dates which might cause issues or just be unnecessary
    // However, for a full year calendar view, setting it to end of year is fine as future dates will just have 0 contributions
    const to = `${year}-12-31T23:59:59Z`;

    const query = `
    query($userName:String!, $from:DateTime!, $to:DateTime!) {
      user(login: $userName){
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: {
                    userName: username,
                    from,
                    to
                },
            }),
        });

        const json = await response.json();

        if (json.errors) {
            console.error("GitHub GraphQL Error:", json.errors);
            return NextResponse.json({ error: json.errors[0].message }, { status: 500 });
        }

        if (!json.data || !json.data.user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const calendar = json.data.user.contributionsCollection.contributionCalendar;

        interface ContributionDay {
            contributionCount: number;
            date: string;
            contributionLevel: string;
        }

        interface GraphQLLevelMap {
            [key: string]: number;
        }

        const levelMap: GraphQLLevelMap = {
            'NONE': 0,
            'FIRST_QUARTILE': 1,
            'SECOND_QUARTILE': 2,
            'THIRD_QUARTILE': 3,
            'FOURTH_QUARTILE': 4,
        };

        const contributions = calendar.weeks.flatMap((week: { contributionDays: ContributionDay[] }) =>
            week.contributionDays.map((day: ContributionDay) => ({
                date: day.date,
                count: day.contributionCount,
                level: levelMap[day.contributionLevel] ?? 0
            }))
        );

        return NextResponse.json({
            contributions: contributions,
            total: calendar.totalContributions
        });

    } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
        return NextResponse.json(
            { error: "Failed to fetch GitHub contributions" },
            { status: 500 }
        );
    }
}
