import Link from "next/link";

interface IProps {
    title: string;
    encoded: string;
}

export default function Button({ title, encoded }: IProps) {
    return (
        <Link href={`/list/${encoded}`}>
            <div className="button_container">{title} →</div>
        </Link>
    );
}
