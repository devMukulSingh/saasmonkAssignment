import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  res: NextResponse,
  { params }: { params: { reviewId: string } }
) {
  try {
    const { movieId, reviewerName, rating, reviewComments } = await req.json();

    const { reviewId } = params;

    if (!movieId)
      return NextResponse.json(
        {
          error: "movieId is required",
        },
        { status: 400 }
      );

    if (!rating)
      return NextResponse.json(
        {
          error: "rating is required",
        },
        { status: 400 }
      );

    if (!reviewComments)
      return NextResponse.json(
        {
          error: "reviewComments is required",
        },
        { status: 400 }
      );

    const updatedReview = await prisma.review.update({
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
      where: {
        id: reviewId,
      },
    });
    return NextResponse.json(updatedReview, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "Internal server error in Edit review PUT api",
        e,
      },
      { status: 500 }
    );
  }
}


export async function DELETE(
  req: NextRequest,
  res: NextResponse,
  { params }: { params: { reviewId: string } }
) {
  try {

    const { reviewId } = params;

    if (!reviewId)
      return NextResponse.json(
        {
          error: "reviewId is required",
        },
        { status: 400 }
      );

    const deletedReview = await prisma.review.delete({
      where: {
        id: reviewId,
      },
    });

    return NextResponse.json(deletedReview, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "Internal server error in Delete review DELETE api",
        e,
      },
      { status: 500 }
    );
  }
}



export async function GET(req: NextRequest, res: NextResponse,
    { params }: { params: { reviewId: string } }
) {
  try {
    const { reviewId } = params;
    const review = await prisma.review.findFirst({
      where:{
        id:reviewId
      }
    });
    return NextResponse.json(review, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "Internal server error in get review GET api",
        e,
      },
      { status: 500 }
    );
  }
}

