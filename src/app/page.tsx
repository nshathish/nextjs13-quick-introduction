'use client';
import { useEffect, useState } from 'react';

import LoadingPage from '@/app/loading';

import Courses from '@/app/components/Courses';
import CourseSearch from '@/app/components/CourseSearch';



export default function HomePage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch('/api/courses');
      const courses = await response.json();
      setCourses(courses);
      setLoading(false);
    }

    fetchCourses().catch(console.error);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome</h1>
      <CourseSearch getSearchResults ={(courses: any[]) => setCourses(courses)}/>
      <Courses courses={courses} />
    </>
  );
}
