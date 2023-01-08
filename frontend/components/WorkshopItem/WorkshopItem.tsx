'use client';

import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";
import {FC, useCallback} from "react";
import Image from "next/image";
import item1 from "../../public/items/item-1.png";

interface WorkshopItemProps {
    itemId: number;

}


const WorkshopItem: FC<WorkshopItemProps> = (props) => {
    const {itemId} = props;
    const {addItemToWorkshop} = useWorkshopContext() as WorkshopContextType;

    const handleClick = useCallback(() => {
        addItemToWorkshop(itemId);
    }, [itemId]);

    return (

        <button onClick={handleClick}>
            <Image src={item1} alt={`${itemId}`} width={50} height={50}/>
        </button>

    );
};

export default WorkshopItem;