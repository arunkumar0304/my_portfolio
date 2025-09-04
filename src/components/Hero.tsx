export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-sm text-zinc-500">Hi, I'm</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Arunkumar</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
        A dedicated and skilled Software Developer with over 4.5+ years of experience. React, Next.js, Angular, Node.js, Express.js, MySQL, MongoDB, and more.
      </p>
      <div className="mt-6 flex gap-3">
        <a href="#projects" className="rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black">View Projects</a>
        <a href="/Arunkumar_Resume.pdf" download className="rounded-md border px-4 py-2">Download Resume</a>
      </div>
    </section>
  );
}
