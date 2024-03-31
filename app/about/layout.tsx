export default function AboutLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className=" w-[70%] min-h-[400px] border-[2px] shadow-2xl m-auto pt-[110px] px-[25px]">
            {children}
        </div>
    );
}
