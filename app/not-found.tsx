"use client";

import { Metadata } from "next";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
    title: "Not Found",
};

export default function NotFound() {
    const router = useRouter();

    return (
        <div className=" font-bold text-[30px] sm:text-[40px] md:text-[60px] w-full h-[100vh] flex flex-col justify-center items-center space-y-5">
            <h1>404 Page Not Found</h1>
            <h1
                className=" hover:cursor-pointer hover:scale-[1.2] transition-all"
                onClick={() => router.push("/")}
            >
                Click to HOME
            </h1>
        </div>
    );
}
