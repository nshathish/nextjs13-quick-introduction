import { FormEvent, useState } from 'react';

interface CourseSearchProps {
  getSearchResults: (courses: any[]) => void;
}

export default function CourseSearch({ getSearchResults }: CourseSearchProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    console.log(courses);

    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input type='text'
             name='search'
             placeholder='Search...'
             className='search-input'
             value={query}
             onChange={event => setQuery(event.target.value)}
      />
      <button type='submit' className='search-button'>search</button>

    </form>
  );
}