import WorkshopContextProvider from "./WorkshopContext";
import RootLayout from "../../layout";

export default function WorkshopLayout({children,}: { children: React.ReactNode }) {
    return (
        <RootLayout>
            <WorkshopContextProvider>
                {children}
            </WorkshopContextProvider>
        </RootLayout>
    );
}