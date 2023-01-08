'use client';

import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";
import Image from "next/image";


export default function WorkshopPanel() {
    const {workshop, removeItemFromWorkshop} = useWorkshopContext() as WorkshopContextType;

    return (
        <div className="flex row-auto">
            {workshop &&
                workshop.map((itemId, index) => {
                    return (
                        <div key={`workshop-panel-${index}`}
                             className="flex flex-row justify-center"
                             onClick={() => removeItemFromWorkshop(itemId)}
                        >
                            <div className="flex flex-col justify-center p-3">
                                    <Image
                                        src={`/items/item-${itemId}.png`}
                                        alt={`${itemId}`}
                                        width={50}
                                        height={50}
                                    />
                            </div>
                        </div>)
                })
            }
        </div>
    )
}
