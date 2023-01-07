import Link from "next/link";

export default function Workshop({params,}: {
    params: { playerId: string };
}) {
    return (
        <>
            <Link href={`${params.playerId}/learning`}>
                <button>
                    To Learning
                </button>
            </Link>

            <div className="grid justify-around grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 bg-sky-500">01</div>
                <div className="col-span-2">02</div>
                <div className="row-span-2 col-span-2">03</div>
            </div>
        </>
    );
};