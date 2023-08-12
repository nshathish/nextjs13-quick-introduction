import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, {params}: {params: {slugs: string[]}}) {

  console.log(params.slugs);

  return NextResponse.json({
    slugs: params.slugs
  });
}