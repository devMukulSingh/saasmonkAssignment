
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(req: NextRequest,
    { params }: { params: { movieId: string } },
) {
    try {
        const { name, releaseDate } = await req.json()
        console.log(name,releaseDate);
        
        
        const { movieId } = params;
        if (!movieId) return NextResponse.json({
            error: "Movie id is required"
        }, { status: 400 })

        if (!name) return NextResponse.json({
            error: 'Movie name is required'
        })
        if (!releaseDate) return NextResponse.json({
            error: 'Release date is required'
        });

        const updatedMovie = await prisma.movie.update({
            data: {
                name,
                releaseDate,
            },
            where: {
                id: movieId
            }
        })

        return NextResponse.json({
            updatedMovie
        }, { status: 200 });

    }
    catch (e:any) {
        console.log(e.message);
        return NextResponse.json({
            error: 'Inernal server error in editmovie PUT api', e
        }, { status: 500 });

    }
}

export async function DELETE(req: NextRequest,
    { params }: { params: { movieId: string } },
) {
    try {
        const { movieId } = params;

        if (!movieId) return NextResponse.json({
            error: "Movie id is required"
        }, { status: 400 })

        const deletedMovie = await prisma.movie.delete({
            where: {
                id: movieId
            }
        })

        return NextResponse.json({
            deletedMovie
        }, { status: 200 });

    }
    catch (e) {
        console.log(e);
        return NextResponse.json({
            error: 'Inernal server error in delete movie DELETE api', e
        }, { status: 500 });
    }
}
