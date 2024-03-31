import Buy from "./buy";

interface IProps {
    url: string;
    image: string;
    title: string;
    author: string;
}

export default function Book({ url, image, title, author }: IProps) {
    return (
        <div className="book">
            <img width="330px" height="500px" object-fit="cover" src={image} />
            <div className="px-[15px] my-[15px]">
                <p className=" font-bold text-[23px] text-left">{title}</p>
                <p className=" font-bold text-[20px] text-left text-blue-500 mb-5">
                    {author}
                </p>
                <Buy url={url} />
            </div>
        </div>
    );
}
