import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-between p-24">
      <h1>Login authentication and reset password with Next.js 14 app router and Resend email api</h1>
      <div>Please star git repo: <Link href="">github</Link> or follow me at <Link href="">@Fosberg Addai</Link></div>
    </main>
  );
}
