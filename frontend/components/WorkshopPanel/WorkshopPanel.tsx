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
                            <button className="relative" onClick={() => handleClick(item)}>
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="absolute top-2 left-2 w-5 h-5 rounded-full bg-red-500 text-white hover:bg-red-600"
                                >
                                    <path  d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            <Image
                                key={`workshop-panel-${index}`}

                                className="workshop-item-empty"
                                src={`/items/item-${item}.png`}
                                alt={`${item}`}
                                width={100}
                                height={100}
                            />
                            </button>
                        )
                    } else {
                        return (
                            <Image
                                key={`workshop-panel-${index}`}
                                className="workshop-item-empty"
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
