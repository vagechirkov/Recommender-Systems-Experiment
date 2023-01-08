import Link from "next/link";
import WorkshopPanel from "../../../components/WorkshopPanel";
import WorkshopInventory from "../../../components/WorkshopInventory";

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

            <div className="flex min-h-screen max-h-screen">
                <div className="flex flex-col w-64">
                    <div className="flex flex-1 justify-center items-center bg-red-200 ">
                        Info
                    </div>
                </div>
                <div className="flex flex-col p-10">
                    <div className="flex overflow-y-auto p-5 bg-green-200">
                        <WorkshopInventory/>
                    </div>
                    <div className="flex h-100 p-5 bg-fuchsia-200">
                        <WorkshopPanel/>
                        <button>
                            Craft
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}
