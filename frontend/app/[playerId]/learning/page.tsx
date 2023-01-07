import Link from "next/link";

export default function Learning({params,}: {
    params: { playerId: string };
}) {
    return (
        <Link href={`${params.playerId}/workshop`}>
            <button className="custom-primary-button">
                To Workshop
            </button>
        </Link>
    );
};


