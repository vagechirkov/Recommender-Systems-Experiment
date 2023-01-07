import Link from "next/link";

export default function Workshop({params,}: {
    params: { playerId: string };
}) {
    return (
        <Link href={`${params.playerId}/learning`}>
            <button>
                To Learning
            </button>
        </Link>
    );
};