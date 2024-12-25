import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <>
    <p className="bg-slate-600">This is an authenticated route</p>
    <UserButton />
    </>

  );
}
