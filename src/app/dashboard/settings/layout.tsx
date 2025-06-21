"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="border-1 border-dashed">
      <h2>Settings Layout {count}</h2>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>Click me</button>
      {children}
    </div>
  );
}
