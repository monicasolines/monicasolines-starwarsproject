import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo1.png";
import { Context } from "../store/appContext";
import { ButtonFavorites } from "./ButtonFavorites.jsx";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (store.isLogged) {
            actions.logout();
        } else {
            navigate("/login");
        }
    };

    const handleContacts = () => {
        actions.getContacts();
    };

    return (
        <nav className="navbar navbar-dark bg-dark" style={{ background: "transparent" }}>
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img 
                            src={logo} 
                            alt="logo" 
                            style={{ width: "120px", height: "70px" }} 
                        />
                    </span>
                </Link>
                <ul className="navbar-nav d-flex align-items-center">
                    <div className="ml-auto d-flex align-items-center" style={{ display: "inline-flex" }}>
                        <li className="nav-item">
                            <Link to="/characters" className="nav-link text-light m-3">
                                Characters
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/planets" className="nav-link text-light m-3">
                                Planets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/starships" className="nav-link text-light m-3">
                                Starships
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contacts" 
                                className="nav-link text-light m-3" 
                                onClick={handleContacts}
                            >
                                Contacts
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center m-2">
                            <ButtonFavorites />
                        </li>
                        <li className="nav-item ml-3">
                            {store.isLogged ? (
                                <button 
                                    className="btn btn-danger" 
                                    onClick={handleLogin}
                                >
                                    Logout
                                </button>
                            ) : (
                                <button 
                                    className="btn btn-success" 
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            )}
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};
