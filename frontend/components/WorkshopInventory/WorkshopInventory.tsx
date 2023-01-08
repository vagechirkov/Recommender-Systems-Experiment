'use client';

import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";
import {FC} from "react";
import WorkshopItem from "../WorkshopItem";


const WorkshopInventory: FC = () => {
    const {inventory, addItemToWorkshop} = useWorkshopContext() as WorkshopContextType;

    return (
        <div className="flex row-auto">
            {inventory &&
                inventory.map((itemId, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-center">
                            <div className="flex flex-col justify-center p-3">
                                <button className="custom-primary-button"
                                        onClick={() => addItemToWorkshop(itemId)}>
                                    <WorkshopItem itemId={itemId}/>
                                </button>
                            </div>
                        </div>)
                })
            }
        </div>
    );
};

export default WorkshopInventory;