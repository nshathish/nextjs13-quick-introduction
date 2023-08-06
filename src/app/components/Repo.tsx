import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';


async function fetchRepo(name: string) {
  const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return await response.json();
}

interface RepoProps {
  name: string;
}

export default async function Repo({ name }: RepoProps) {
  const repo = await fetchRepo(name);

  return (
    <>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
}