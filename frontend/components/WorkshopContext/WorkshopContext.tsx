'use client';

import {createContext, useCallback, useContext, useState} from 'react';


export type WorkshopContextType = {
    // list of items in workshop
    workshop: number[] | [];
    addItemToWorkshop: (selectedItem: number) => void;
    removeItemFromWorkshop: (selectedItem: number) => void;
}

const WorkshopContext = createContext<WorkshopContextType | null>(null);

export default function WorkshopContextProvider({children,}: { children: React.ReactNode }) {
    const [workshop, setWorkshop] = useState<WorkshopContextType['workshop']>([]);

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

    return (
        <WorkshopContext.Provider
            value={{workshop, addItemToWorkshop, removeItemFromWorkshop}}>
            {children}
        </WorkshopContext.Provider>
    );
}

export const useWorkshopContext = () => useContext(WorkshopContext);