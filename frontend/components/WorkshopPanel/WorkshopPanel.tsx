'use client';

import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";


export default function WorkshopPanel() {
    const {workshop, removeItemFromWorkshop} = useWorkshopContext() as WorkshopContextType;

    return (
        <div className="flex row-auto">
            {workshop &&
                workshop.map((itemText, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-center">
                            <div className="flex flex-col justify-center p-3">
                                <button className="custom-primary-button"
                                        onClick={() => removeItemFromWorkshop(itemText)}>
                                    {itemText}
                                </button>
                            </div>
                        </div>)
                })
            }
        </div>
    )
}
