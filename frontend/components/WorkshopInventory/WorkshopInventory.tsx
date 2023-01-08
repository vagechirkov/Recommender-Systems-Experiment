'use client';

import {FC} from "react";
import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";
import Image from "next/image";


const WorkshopInventory: FC = () => {
    const {inventory, addItemToWorkshop} = useWorkshopContext() as WorkshopContextType;

    return (
        <div className="flex row-auto">
            {inventory &&
                inventory.map((itemId, index) => {
                    return (
                        <div key={`workshop-inventory-${index}`}
                             className="flex flex-row justify-center"
                             onClick={() => addItemToWorkshop(itemId)}
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
    );
};

export default WorkshopInventory;