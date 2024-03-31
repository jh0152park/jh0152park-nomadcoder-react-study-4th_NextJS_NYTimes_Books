"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <div className="container w-full min-w-[100%] max-w-[100%] z-[100]">
            <Link href="/">
                <div className="header">Home</div>
            </Link>
            <Link href="/about">
                <div className="header">About</div>
            </Link>
        </div>
    );
}
