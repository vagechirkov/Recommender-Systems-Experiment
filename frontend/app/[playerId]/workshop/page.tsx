import Link from "next/link";
import WorkshopPanel from "../../../components/WorkshopPanel";
import WorkshopInventory from "../../../components/WorkshopInventory";

export default function Workshop({params,}: {
    params: { playerId: string };
}) {
    return (
        <>
            <div className="flex min-h-screen max-h-screen p-2">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="p-3 text-center">
                            <Link href={`${params.playerId}/learning`}>
                                <button className="custom-primary-button">
                                    To Learning
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col min-w-[20%] max-w-[20%]">
                            <div className="flex flex-1 justify-center bg-red-200">
                                Info
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-wrap overflow-y-auto h-[500px] bg-green-200">
                                <WorkshopInventory/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row-reverse bg-fuchsia-200">
                            <button className="craft-button">
                                Craft
                            </button>
                            <WorkshopPanel/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
