import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <div className=" text-[20px]">
            <p className=" font-bold text-[50px] mb-[30px]">ABOUT US</p>
            <p className=" mb-[10px]">
                Welcome to the official explorer for The New York Times Best
                Seller list explorer.
            </p>
            <p>We hope you enjot your stay!</p>
        </div>
    );
}
