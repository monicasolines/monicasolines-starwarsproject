import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ButtonFavorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle position-relative"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static" // Permite que el dropdown se expanda fuera del contenedor
            >
                Favorite
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    {store.favorites.length}
                </span>
            </button>

            <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end" // Alinea el dropdown a la derecha
                aria-labelledby="dropdownMenuButton1"
                style={{ maxHeight: "300px", overflowY: "auto" }} // Habilita scroll si hay muchos favoritos
            >
                {store.favorites.length === 0 ? (
                    <li>
                        <span className="dropdown-item">No tienes ningún favorito</span>
                    </li>
                ) : (
                    store.favorites.map((item, index) => (
                        <li
                            key={index}
                            className="dropdown-item d-flex justify-content-between align-items-center"
                        >
                            <span>{item.name} ({item.type})</span>
                            <button
                                className="btn btn-light"
                                onClick={() => actions.removeFavorite(item)}
                            >
                                <i className="fas fa-trash text-danger"></i>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
