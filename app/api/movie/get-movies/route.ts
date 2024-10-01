import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest,res:NextResponse){
    try{
        const movies = await prisma.movie.findMany();
        return NextResponse.json(movies,{status:200});            
    }
    catch(e){
        console.log(e);
        return NextResponse.json({
            error:`Internal server error in GET movies API`,e
        },{status:500});
    }
}