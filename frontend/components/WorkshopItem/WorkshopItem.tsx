'use client';

import {useWorkshopContext, WorkshopContextType} from "../../app/[playerId]/workshop/WorkshopContext";


export default function WorkshopItem({itemText,}: { itemText: string }) {
    const {item, addItemToWorkshop} = useWorkshopContext() as WorkshopContextType;

    return (

        <button className="custom-primary-button" onClick={() => addItemToWorkshop(itemText)}>
            {itemText}
        </button>

    );
};