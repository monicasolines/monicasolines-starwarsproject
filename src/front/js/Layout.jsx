import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
// Custom components
import ScrollToTop from "./component/ScrollToTop.jsx";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
// Custom page / views
import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/Demo.jsx";
import { Single } from "./pages/Single.jsx";
import { AddContact } from "./pages/AddContact.jsx";
import { Contacts } from "./pages/Contacts.jsx";
import { Login } from "./pages/Login.jsx";
import { EditContacts } from "./pages/EditContacts.jsx";
import { Characters } from "./pages/Characters.jsx";
import { Planets } from "./pages/Planets.jsx";
import { Starships } from "./pages/Starships.jsx";
import { CharactersDetails } from "./pages/CharactersDetails.jsx";
import { PlanetDetails, PlanetsDetails } from "./pages/PlanetsDetails.jsx";
import { StarshipDetails } from "./pages/StarshipsDetails.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";


const Layout = () => {
    const basename = process.env.BASENAME || "";
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div className="d-flex flex-column min-vh-100" style={{backgroundColor: "#DDE0E5"}}> {/* Contenedor principal */}
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <div className="flex-grow-1"> {/* Contenido principal */}
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Single />} path="/single/:theid" />
                            <Route element={<AddContact />} path="/add-contact" />
                            <Route element={<Contacts />} path="/contacts" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<EditContacts />} path="/edit-contact" />
                            <Route element={<Characters />} path="/characters" />
                            <Route element={<Planets />} path="/planets" />
                            <Route element={<Starships />} path="/starships" />
                            <Route element={<CharactersDetails />} path="/characters/:id" />
                            <Route element={<PlanetDetails />} path="/planets/:id" />
                            <Route element={<StarshipDetails />} path="/starships/:id" />
                            <Route element={<Dashboard />} path="/dashboard" />
                            <Route element={<h1>Not found!</h1>} path="*" />
                        </Routes>
                    </div>
                </ScrollToTop>
            </BrowserRouter>
            <Footer /> {/* Footer permanece al final */}
        </div>
    );
};


export default injectContext(Layout);
