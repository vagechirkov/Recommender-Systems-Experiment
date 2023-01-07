'use client';

import {Button as FlowbiteButton} from 'flowbite-react';


export default function Button ({children,}: {
    children: React.ReactNode;
}) {
    return (
        <FlowbiteButton>
            {children}
        </FlowbiteButton>
    );
}