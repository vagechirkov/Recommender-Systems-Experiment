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
        <div className="flex flex-wrap">
            {inventory &&
                inventory.map((itemId, index) => {
                    return (
                        <div key={`workshop-inventory-${index}`}
                             className="flex flex-row justify-center"
                             onClick={() => handleClick(itemId)}
                        >
                            <div className="flex flex-col justify-center p-3">
                                    <Image
                                        key={`workshop-inventory-${index}`}
                                        onClick={() => handleClick(itemId)}
                                        className="workshop-item"
                                        src={`/items/item-${itemId}.png`}
                                        alt={`${itemId}`}
                                        width={100}
                                        height={100}
                                    />
                            </div>
                        </div>)
                })
            }
        </div>
    );
}
    ;

    export default WorkshopInventory;