import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Navbar() {
  return (
    <nav className="w-full p-5 flex justify-between items-center">
        <div>
            <Link href="/"><h1 className="text-4xl">IndieFails</h1></Link>
        </div>
        <div>
            <Link href="/submit"><Button>Submit</Button></Link>
        </div>
    </nav>
  )
}
