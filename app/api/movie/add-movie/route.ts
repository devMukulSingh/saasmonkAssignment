import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, releaseDate } = await req.json();

    if (!name)
      return NextResponse.json({
        error: "Movie name is required",
      });
    if (!releaseDate)
      return NextResponse.json({
        error: "Release date is required",
      });

    const isMovieExists = await prisma.movie.findFirst({
      where: {
        name,
      },
    });

    if (isMovieExists)
      return NextResponse.json(
        {
          error: "Movie already exists",
        },
        { status: 400 },
      );

    const movie = await prisma.movie.create({
      data: {
        name,
        releaseDate,
      },
      include: {
        reviews: true,
      },
    });

    return NextResponse.json(
      {
        movie,
      },
      { status: 201 },
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "Inernal server error in addmovie POST api",
        e,
      },
      { status: 500 },
    );
  }
}
