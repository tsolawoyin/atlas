import { useRouteError } from "react-router-dom";
import Header from "./Main/Header";
import Footer from "./Footer";
import { useEffect } from "react";

function ErrorPage() {
    const error = useRouteError();
    useEffect(() => {
        document.title = "Error";
    }, [])
    return (
        // will fix this later jare...
        <div id="app">
            <Header />
            <p className="subtitle" style={{
                alignSelf: "center",
                justifySelf: 'center'
            }}>Oops. {error.statusText || error.message} </p>
        </div>
    )
}

export default ErrorPage;