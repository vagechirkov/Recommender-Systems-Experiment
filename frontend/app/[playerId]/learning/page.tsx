import Link from "next/link";

export default function Learning({params,}: {
    params: { playerId: string };
}) {
    return (
        <Link href={`${params.playerId}/workshop`}>
            <button>
                To Workshop
            </button>
        </Link>
    );
};


