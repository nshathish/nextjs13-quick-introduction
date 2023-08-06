import Link from 'next/link';

interface CoursesProps {
  courses: any[];
}

export default function Courses({ courses }: CoursesProps) {
  return (
    <div className='courses'>
      {courses.map((course: any) => (
        <div className='card' key={course.id}>
          <h3>{course.title}</h3>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target='_blank' className='btn'>
            Go to course
          </Link>
        </div>
      ))}
    </div>
  );
}