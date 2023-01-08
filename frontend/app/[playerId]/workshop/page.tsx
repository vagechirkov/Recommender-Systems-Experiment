import Link from "next/link";
import WorkshopItem from "../../../components/WorkshopItem";
import WorkshopPanel from "../../../components/WorkshopPanel";

export default function Workshop({params,}: {
    params: { playerId: string };
}) {
    return (
        <>
            <div className="p-3 text-center">
                <Link href={`${params.playerId}/learning`}>
                    <button className="custom-primary-button">
                        To Learning
                    </button>
                </Link>
            </div>

            <div className="grid grid-rows-3 grid-flow-row-dense gap-2 h-screen">
                <div className="row-span-2 col-span-1 bg-sky-100">
                    Info
                </div>
                <div className="row-span-2 col-span-2 bg-sky-200">
                    {'abcde'.split('').map((letter, index) => {
                            return (
                                <div key={index} className="flex flex-row justify-center">
                                    <div className="flex flex-col justify-center p-3">
                                        <WorkshopItem itemText={letter}/>
                                    </div>
                                </div>)
                        }
                    )}
                </div>
                <div className="row-span-1 col-span-3 bg-sky-300">
                    <WorkshopPanel />
                </div>
            </div>
        </>
    );
}
