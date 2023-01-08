'use client';

import {useWorkshopContext, WorkshopContextType} from "../WorkshopContext/WorkshopContext";
import Image from "next/image";
import {useCallback, useEffect, useState} from "react";


export default function WorkshopPanel() {
    const [isCrafting, setIsCrafting] = useState(false);
    const {
        inventory,
        workshop,
        craftItem,
        removeItemFromWorkshop,
        isSuccessfulCraft
    } = useWorkshopContext() as WorkshopContextType;

    useEffect(() => {
        if (isCrafting)
            setTimeout(() => {
                setIsCrafting(false);
            }, 2000);
    }, [isCrafting]);

    const handleClick = useCallback((selectedItem: number) => {
        removeItemFromWorkshop(selectedItem);
    }, [removeItemFromWorkshop]);

    const renderWorkshopItems = (index: number) => {
        if (workshop.length >= index) {
            const item = workshop[index - 1];
            return (
                <button
                    key={`workshop-panel-${index}`}
                    className="relative"
                    onClick={() => handleClick(item)}
                >
                    {/* Remove icon */}
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="absolute top-2 left-2 w-5 h-5 rounded-full bg-red-500 text-white hover:bg-red-600"
                    >
                        <path d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <Image
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

    const handleCraft = () => {
        setIsCrafting(true);
        craftItem();
    };

    return (
        <>
            {renderWorkshopItems(1)}
            <div className="text-center text-xl">
                +
            </div>

            {renderWorkshopItems(2)}

            <button
                className="craft-button"
                onClick={handleCraft}
            >
                Craft
            </button>


            {isCrafting &&
                <div
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-90">
                    <div className="text-xl text-center">{`${isSuccessfulCraft ? "Success" : "Fail"}`}
                        <Image
                            className="workshop-item-empty"
                            src={`/items/item-${isSuccessfulCraft ? inventory[inventory.length - 1] : 0}.png`}
                            alt="animation"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            }
        </>
    )
}
