'use client';

import {FC, useCallback} from "react";
import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";
import Image from "next/image";


const WorkshopInventory: FC = () => {
    const {inventory, addItemToWorkshop} = useWorkshopContext() as WorkshopContextType;

    const handleClick = useCallback((selectedItem: number) => {
        addItemToWorkshop(selectedItem);
    }, [addItemToWorkshop]);

    return (
        <>
            {inventory &&
                // iterate over items from 1 to 100
                [1, ...Array(100)].map((_, index) => {
                    // skip 0
                    index++;
                    if (inventory.some((i) => i === index)) {
                        return (
                            <Image
                                key={`workshop-inventory-${index}`}
                                onClick={() => handleClick(index)}
                                className="workshop-item"
                                src={`/items/item-${index}.png`}
                                alt={`${index}`}
                                width={100}
                                height={100}
                            />
                        )
                    } else {
                        return (
                            <Image
                                key={`workshop-inventory-${index}`}
                                className="workshop-item-unavailable"
                                src={`/items/item-0.png`}
                                alt={`${index}`}
                                width={100}
                                height={100}
                            />
                        )
                    }
                })
                }

        </>
    );
}
    ;

    export default WorkshopInventory;