import Link from "next/link";

export default function Workshop({params,}: {
    params: { playerId: string };
}) {
    return (
        <>
            <Link href={`${params.playerId}/learning`}>
                <button className="custom-primary-button">
                    To Learning
                </button>
            </Link>

            <div className="grid grid-rows-3 grid-flow-row-dense gap-4 h-screen ">
                <div className="row-span-2 col-span-1 bg-sky-100">01</div>
                <div className="row-span-2 col-span-2 bg-sky-200">02</div>
                <div className="row-span-1 col-span-3 bg-sky-300">03</div>
            </div>
        </>
    );
};