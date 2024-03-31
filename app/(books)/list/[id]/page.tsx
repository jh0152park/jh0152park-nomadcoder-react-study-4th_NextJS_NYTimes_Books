import Book from "@/components/book";
import { getBookList } from "@/components/list/getBookList";

export default async function BookDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    const books = await getBookList(id);
    const category = id.replace("-", " ").replace("and", "&").toUpperCase();

    return (
        <div className="w-full min-h-full pt-[150px]">
            <div className=" w-full flex justify-center font-bold text-[30px] mb-8">
                <p>{category}</p>
            </div>
            <div className=" flex justify-start items-center flex-wrap mb-10 px-10">
                {books.results.books.map((book) => (
                    <Book
                        key={book.title}
                        url={book.amazon_product_url}
                        image={book.book_image}
                        title={book.title}
                        author={book.author}
                    />
                ))}
            </div>
        </div>
    );
}
