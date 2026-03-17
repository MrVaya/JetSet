import { NextResponse } from "next/server";
import { FLIGHTS } from "@/lib/data";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const origin = searchParams.get("origin")?.toUpperCase();
        const destination = searchParams.get("destination")?.toUpperCase();

        // 1. If both params exist, filter the data
        if (origin && destination) {
            const filtered = FLIGHTS.filter(
                (f) => f.fromCode === origin && f.toCode === destination
            );
            return NextResponse.json(filtered);
        }

        return NextResponse.json(FLIGHTS);

    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}