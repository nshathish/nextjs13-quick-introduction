import { NextResponse } from 'next/server';

import courses from './data.json';


export async function GET(req: Request) {
  return NextResponse.json(courses);
}

export async function POST(req: Request) {
  const { title, description, link, level } = await req.json();
  const course = {
    id: courses.length + 1,
    title,
    description,
    link,
    level,
  };
  courses.push(course);

  return NextResponse.json(courses);
}