import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const dep = searchParams.get("dep_iata")?.toUpperCase();
        const arr = searchParams.get("arr_iata")?.toUpperCase();
        const date = searchParams.get("date");
        const API_KEY = process.env.AIRLABS_API_KEY;

        console.log(`Searching AirLabs: ${dep} to ${arr} for date ${date}`); // Look at your terminal for this log

        if (!dep || !arr || !API_KEY) {
            return NextResponse.json({ error: "Missing Parameters or API Key" }, { status: 400 });
        }

        const response = await fetch(
            `https://airlabs.co/api/v9/schedules?dep_iata=${dep}&arr_iata=${arr}${date ? `&dep_time=${date}` : ''}&api_key=${API_KEY}`,
            { cache: 'no-store' }
        );

        const data = await response.json();

        // AirLabs returns data in a .response array
        return NextResponse.json(data.response || []);
    } catch (error) {
        console.error("Proxy Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}