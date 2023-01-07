'use client';

import {createContext, useCallback, useContext, useState} from 'react';

export type WorkshopItem = {
    item: string;
}

export type WorkshopContextType = {
    item: string;
    workshop: string[] | [];
    addItemToWorkshop: (selectedItem: string) => void;
    removeItemFromWorkshop: (selectedItem: string) => void;
}

const WorkshopContext = createContext<WorkshopContextType | null>(null);

export default function WorkshopContextProvider({children,}: { children: React.ReactNode }) {
    const [item, setItem] = useState<WorkshopContextType['item']>("" as WorkshopContextType['item']);
    const [workshop, setWorkshop] = useState<WorkshopContextType['workshop']>([] as WorkshopContextType['workshop']);

    const addItemToWorkshop = useCallback((selectedItem: WorkshopContextType['item']) => {
        setItem(selectedItem);
        // check if item string is already in workshop
        if (!workshop.some((i) => i === selectedItem)) {
            setWorkshop([...workshop, selectedItem]);
        }

    }, [item, workshop]);

    const removeItemFromWorkshop = useCallback((selectedItem: WorkshopContextType['item']) => {
        // check if item string is in workshop
        if (workshop.some((i) => i === selectedItem)) {
            setWorkshop(workshop.filter((i) => i !== selectedItem));
        }
    }, [workshop]);

    return (
        <WorkshopContext.Provider
            value={{item, workshop, addItemToWorkshop, removeItemFromWorkshop}}>
            {children}
        </WorkshopContext.Provider>
    );
}

export const useWorkshopContext = () => useContext(WorkshopContext);