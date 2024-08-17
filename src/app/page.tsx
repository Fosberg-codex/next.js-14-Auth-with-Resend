import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 items-center justify-between p-24">
      <h1>Login authentication and reset password with Next.js 14 app router and Resend email api</h1>
      <div>Please star git repo: <Link className="underline" href="https://github.com/Fosberg-codex/next.js-14-with-Resend">github</Link> or follow me at <Link className="underline" href="https://x.com/FosbergAddai">@Fosberg Addai</Link></div>
    </main>
  );
}
