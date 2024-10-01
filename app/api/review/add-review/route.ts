import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { movieId, reviewerName, rating, reviewComments } = await req.json();

    if (!movieId)
      return NextResponse.json(
        {
          error: "movieId is required",
        },
        { status: 400 },
      );

    if (!rating)
      return NextResponse.json(
        {
          error: "rating is required",
        },
        { status: 400 },
      );

    if (!reviewComments)
      return NextResponse.json(
        {
          error: "reviewComments is required",
        },
        { status: 400 },
      );

    const review = await prisma.review.create({
      data: {
        reviewerName,
        rating,
        reviewComments,
        movie: {
          connect: {
            id: movieId,
          },
        },
      },
    });
    return NextResponse.json(review, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "Internal server error in Add review POST api",
        e,
      },
      { status: 500 },
    );
  }
}
