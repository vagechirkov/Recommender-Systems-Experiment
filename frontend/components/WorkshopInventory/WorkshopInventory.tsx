'use client';

import {FC, useCallback} from "react";
import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";
import Image from "next/image";


const WorkshopInventory: FC = () => {
    const {inventory, workshop, addItemToWorkshop} = useWorkshopContext() as WorkshopContextType;

    const handleClick = useCallback((selectedItem: number) => {
        if(workshop.length < 2) {
            addItemToWorkshop(selectedItem);
        }
    }, [addItemToWorkshop, workshop]);

    const renderInventoryItems = useCallback(() => {
        return (
            <>
                {inventory &&
                    // iterate over items from 1 to 100
                    [...Array(100)].map((_, index) => {
                        // skip 0
                        index++;
                        if (inventory.some((i) => i === index)) {
                            return (
                                <Image
                                    key={`workshop-inventory-${index}`}
                                    onClick={() => handleClick(index)}
                                    // set class based on the workshop length
                                    className={`${workshop.length >= 2 ? 'workshop-item-unavailable' : 'workshop-item'}`}
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
                                    className="workshop-item-empty"
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
        )
    }, [inventory, handleClick, workshop]);

    return (
        <>
            {renderInventoryItems()}
        </>
    );
}
    ;

    export default WorkshopInventory;