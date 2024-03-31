import { Metadata } from "next";
import { getBookCategories } from "@/components/categories/getBookCategories";

import Button from "@/components/button";

export const metadata: Metadata = {
    title: "Categories",
};

export default async function HomePage() {
    const categories = await getBookCategories();

    return (
        <>
            <div className=" w-full h-full font-bold text-[40px]">
                <p>THE NEW YORK TIMES BEST SELLER</p>
                <p>EXPLORER</p>

                <div className=" flex justify-start items-center flex-wrap my-16">
                    {categories.results.map((category) => (
                        <Button
                            key={category.list_name}
                            title={category.display_name}
                            encoded={category.list_name_encoded}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
