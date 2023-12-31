import Link from 'next/link';

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href={'/'}>Traversy Media</Link>
        </div>
        <div className='links'>
          <Link href={'/about'}>About</Link>
          <Link href={'/about/team'}>Our Team</Link>
          <Link href={'/repos'}>Repos</Link>
        </div>
      </div>
    </header>
  );
}