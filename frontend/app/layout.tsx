import WorkshopContextProvider from "../components/WorkshopContext";

import './globals.css'

export default function RootLayout(
    {
        // Layouts must accept a children prop.
        // This will be populated with nested layouts or pages
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
        <html lang="en">
        <head>
            <title>
                Experiment
            </title>
        </head>
        <body>
        <WorkshopContextProvider>
            {children}
        </WorkshopContextProvider>
        </body>
        </html>
    );
}