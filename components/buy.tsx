import Link from "next/link";

interface IProps {
    url: string;
}

export default function Buy({ url }: IProps) {
    return (
        <Link href={url}>
            <div className="buy">Buy now →</div>
        </Link>
    );
}
