import Link from 'next/link';

async function fetchRepoDirectories(name: string) {
  await new Promise(resolve => setTimeout(resolve, 3000));

  const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`);
  return await response.json();
}

interface RepoDirectoriesProps {
  name: string;
}

export default async function RepoDirectories({ name }: RepoDirectoriesProps) {
  const content = await fetchRepoDirectories(name);
  const dirs = content.filter((item: any) => item.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}