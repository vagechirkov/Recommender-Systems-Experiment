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
                    {/*<div className="flex flex-col">*/}
                    {/*    <div className="p-3 text-center">*/}
                    {/*        <Link href={`${params.playerId}/learning`}>*/}
                    {/*            <button className="custom-primary-button">*/}
                    {/*                To Learning*/}
                    {/*            </button>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="flex flex-row">
                        <div className="flex flex-col min-w-[20%] max-w-[20%] box">
                            <div className="flex flex-1 justify-center">
                                Info
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-wrap overflow-y-auto h-[300px] md:h-[700px] box pl-10 pr-10">
                                <WorkshopInventory/>
                            </div>
                            <div className="flex flex-row justify-end items-center box pr-10">
                                <WorkshopPanel/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
