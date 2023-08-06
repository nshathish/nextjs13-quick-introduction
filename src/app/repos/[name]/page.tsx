import Link from 'next/link';
import { Suspense } from 'react';

import Repo from '@/app/components/Repo';
import RepoDirectories from '@/app/components/RepoDirectories';


export default function RepoDetailsPage({ params }: { params: { name: string } }) {
  return (
    <div className='card'>
      <Link href={'/repos'} className='btn btn-back'>Back to Repositories</Link>
      <Suspense fallback={<h3>Loading repo...</h3>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<h3>Loading dirs...</h3>}>
        <RepoDirectories name={params.name} />
      </Suspense>
    </div>
  );
}