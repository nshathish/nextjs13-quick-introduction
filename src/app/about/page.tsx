import Link from 'next/link';

export const metadata = {
  title: 'NextJs 13 Lab 1 - about',
}


export default function AboutPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-6xl'>About</h1>
      <Link href={'/'}>Home</Link>
    </main>
  );
}