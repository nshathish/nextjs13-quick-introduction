import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
  const id = params.id;

  return NextResponse.json({
    message: 'success',
    id,
  });
}