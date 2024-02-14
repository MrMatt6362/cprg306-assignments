import Link from "next/link";


export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <div><Link href="week-2">week-2</Link></div>
        <div><Link href="week-3">week-3</Link></div>
        <div><Link href="week-4">week-4</Link></div>
      </nav>
    </main>
  );
}