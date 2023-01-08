'use client';

import {createContext, useCallback, useContext, useEffect, useState} from 'react';


export type WorkshopContextType = {
    // list of items in workshop
    workshop: number[] | [];
    // list of items in inventory
    inventory: number[] | [];
    addItemToWorkshop: (selectedItem: number) => void;
    removeItemFromWorkshop: (selectedItem: number) => void;
    craftItem: () => void;
    isSuccessfulCraft: boolean;
}

const WorkshopContext = createContext<WorkshopContextType | null>(null);

export default function WorkshopContextProvider({children,}: { children: React.ReactNode }) {
    const [isSuccessfulCraft, setIsSuccessfulCraft] = useState(false);
    const [inventory, setInventory] = useState<WorkshopContextType['inventory']>([1, 2, 3]);
    const [workshop, setWorkshop] = useState<WorkshopContextType['workshop']>([]);

    useEffect(() => {
        if (isSuccessfulCraft)
            setTimeout(() => {
                setIsSuccessfulCraft(false);
            }, 2000);

    }, [isSuccessfulCraft]);

    const addItemToWorkshop = useCallback((selectedItem: number) => {
        // check if item string is already in workshop
        if (!workshop.some((i) => i === selectedItem)) {
            setWorkshop([...workshop, selectedItem]);
        }

    }, [workshop]);

    const removeItemFromWorkshop = useCallback((selectedItem: number) => {
        // check if item string is in workshop
        if (workshop.some((i) => i === selectedItem)) {
            setWorkshop(workshop.filter((i) => i !== selectedItem));
        }
    }, [workshop]);

    const craftItem = useCallback(() => {
        // check if item string is in workshop
        if (workshop.length === 2) {
            setWorkshop([]);
            // fetch combination from backend

            // update inventory with 50% chance of getting a new item
            if (Math.random() < 0.5) {

                if (inventory.length === 12) {
                    setInventory([...inventory.slice(1, 5)]);
                } else {
                    // for select random item between 1 and 12 that is not in inventory
                    const itemsNotInInventory = [...Array(12)]
                        .map((_, index) => index + 1)
                        .filter((i) => !inventory.some((j) => j === i));

                    console.log(itemsNotInInventory);

                    const combination = itemsNotInInventory[Math.floor(Math.random() * itemsNotInInventory.length)];

                    setInventory([...inventory, combination]);
                    setIsSuccessfulCraft(true);
                }
            }
        }

    }, [workshop, inventory]);

    return (
        <WorkshopContext.Provider
            value={{workshop, inventory, addItemToWorkshop, removeItemFromWorkshop, craftItem, isSuccessfulCraft}}>
            {children}
        </WorkshopContext.Provider>
    );
}

export const useWorkshopContext = () => useContext(WorkshopContext);