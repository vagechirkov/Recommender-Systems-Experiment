'use client';

import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";
import Image from "next/image";
import {useCallback} from "react";


export default function WorkshopPanel() {
    const {workshop, removeItemFromWorkshop} = useWorkshopContext() as WorkshopContextType;

    const handleClick = useCallback((selectedItem: number) => {
        removeItemFromWorkshop(selectedItem);
    }, [removeItemFromWorkshop]);

    return (
        <>
            {[...Array(2)].map((_, index) => {
                    index++;
                    if (workshop.length >= index) {
                        const item = workshop[index - 1];
                        return (
                            <Image
                                key={`workshop-panel-${index}`}
                                onClick={() => handleClick(item)}
                                className="workshop-item"
                                src={`/items/item-${item}.png`}
                                alt={`${item}`}
                                width={100}
                                height={100}
                            />
                        )
                    } else {
                        return (
                            <Image
                                key={`workshop-panel-${index}`}
                                className="workshop-item-unavailable"
                                src={`/items/item-0.png`}
                                alt={`${index}`}
                                width={100}
                                height={100}
                            />
                        )
                    }
                }
            )}
        </>
    )
}
