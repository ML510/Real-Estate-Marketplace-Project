import React from "react";
import Footer from "../general/Footer";

function frontendLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}
export default frontendLayout