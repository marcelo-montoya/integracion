import { Header } from "./Header"






export const DefaultLayout = ({ children }) => {
    return (
        <>

            <Header />


            <main>
                {children}
            </main>
        </>
    )
}
