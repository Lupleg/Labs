import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <UserButton />
      <h2 className="text-6xl">This is a protected page</h2>
    </div>
  );
}
