import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const shows = await prisma.show.findMany();
    return NextResponse.json(shows);
  } catch (error) {
    console.error("Error fetching shows:", error);
    return NextResponse.json(
      { error: "Error fetching shows" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const show = await prisma.show.create({
      data: {
        showName: body.showName,
        showImageUrl: body.showImageUrl,
        format: body.format,
        tier: body.tier,
        locationName: body.locationName,
        locationAddress: body.locationAddress,
        isCurrentlyRunning: body.isCurrentlyRunning,
        closingDate: body.closingDate ? new Date(body.closingDate) : null,
        hasInPersonRush: body.hasInPersonRush,
      },
    });

    return NextResponse.json(show);
  } catch (error) {
    console.error("Error creating show:", error);
    return NextResponse.json({ error: "Error creating show" }, { status: 500 });
  }
}
