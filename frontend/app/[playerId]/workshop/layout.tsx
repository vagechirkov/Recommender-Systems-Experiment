import RootLayout from "../../layout";

export default function WorkshopLayout({children,}: { children: React.ReactNode }) {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
}