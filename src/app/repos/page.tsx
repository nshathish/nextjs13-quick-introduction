import Link from 'next/link';
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/bradtraversy/repos?sort=created');
  await new Promise(resolve => setTimeout(resolve, 1000));
  return await response.json();
}


export default async function RepoListPage() {
  const repos = await fetchRepos();

  return (
    <main className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos.map((repo: any) => (
            <li key={repo.id}>
              <Link href={`/repos/${repo.name}`}>{repo.name}</Link>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span><FaStar />{repo.stargazers_count}</span>
                <span><FaCodeBranch />{repo.forks_count}</span>
                <span><FaEye />{repo.watchers_count} </span>
              </div>
            </li>
          ),
        )}
      </ul>
    </main>
  );
}