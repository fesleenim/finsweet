"use client"
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

function Navlink({ href, children }) {
  const path = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={`px-4 py-2 ${
          path === href ? "text-yellow-500 font-bold" : "text-white"
        }`}
      >
        {children}
      </Link>
    </div>
  );
}

export default Navlink;
