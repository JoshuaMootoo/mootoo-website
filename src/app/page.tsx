import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to My Website</h1>
      <nav>
        <ul>
          <li><Link href="\cv">CV</Link></li>
          <li><Link href="\projects">Projects</Link></li>
          <li><Link href="\blog">Blog</Link></li>
        </ul>
      </nav>
    </main>
  )
}