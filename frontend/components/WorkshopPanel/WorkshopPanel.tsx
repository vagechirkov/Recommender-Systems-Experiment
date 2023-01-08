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
            {workshop &&
                workshop.map((itemId, index) => {
                    return (
                        <Image
                            key={`workshop-panel-${index}`}
                            onClick={() => handleClick(itemId)}
                            className="workshop-item"
                            src={`/items/item-${itemId}.png`}
                            alt={`${itemId}`}
                            width={100}
                            height={100}
                        />
                    )
                })
            }
        </>
    )
}
