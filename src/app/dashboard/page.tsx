import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div>
            <Image src="vercel.svg" alt="logo" width={30} height={30} />
            <Link href="/">Home</Link>
        </div>
    )
}