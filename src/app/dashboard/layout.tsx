"use client";
import Link from "next/link";
import { useState } from "react";
// 使用 usePathname 获取当前路径
import { usePathname } from "next/navigation";

const linkData = [
    {name: "About", href: "/dashboard/about"},
    {name: "Settings", href: "/dashboard/settings"},
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="border-1 border-dashed p-5 m-2 mx-auto border-black">
      <div className="flex gap-2">
        {
            linkData.map((item) => (
                <Link href={item.href} className={pathname === item.href ? "text-blue-500" : ""}>{item.name}</Link>
            ))
        }
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>Click me</button>
      {children}
    </div>
  );
}
