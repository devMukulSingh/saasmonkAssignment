import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
    req: NextRequest,
    res: NextResponse,
) {
    try {
        const movieId = req.nextUrl.searchParams.get('movieId');

        console.log(movieId);

        if(!movieId) return NextResponse.json({
            error:'Movie id is required'
        },{status:400});
        
        const reviews = await prisma.review.findMany({
            where:{
                movieId
            }
        });

        return NextResponse.json(reviews, { status: 200 });
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