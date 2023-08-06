import { NextResponse } from 'next/server';

import course from '../data.json';


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json(course);
  }

  const filtered = course.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filtered);
}