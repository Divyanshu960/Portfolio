import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center">Hi, I'm Divyanshu Chaurasiya</h1>
      <p className="mt-4 text-xl text-center">Full Stack Developer | AI & ML Enthusiast</p>
      <div className="mt-6 space-x-4">
        <Link href="/projects" className="text-blue-500 underline">Projects</Link>
        <Link href="/about" className="text-blue-500 underline">About</Link>
        <Link href="/contact" className="text-blue-500 underline">Contact</Link>
      </div>
    </main>
  );
}
