import React from "react";
import Link from "next/link";

// Definición de las rutas del menú
const menuRoutes = [
    {
        ruta: "/",
        nombre: "Inicio"
    },
    {
        ruta: "/about",
        nombre: "Acerca de"
    },
    {
        ruta: "/densidad",
        nombre: "Composición"
    }
];

// Componente de menú de navegación
function Menu() {
    return (
        <div style={{ width: "230px", backgroundColor: "#333", height: "100vh", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px", color: "#fff", textAlign: "center" }}>Menú de Navegación</h1>
            <ul style={{ listStyle: "none", padding: "0", margin: "0", width: "100%" }}>
                {/* Mapeo de las rutas del menú */}
                {menuRoutes.map((menu, index) => (
                    <li style={{ marginBottom: "10px", border: "1px solid #007bff", borderRadius: "5px" }} key={index}>
                        {/* Enlace de navegación */}
                        <Link href={menu.ruta}>
                            <div style={{ display: "block", textDecoration: "none", color: "#007bff", padding: "10px", transition: "color 0.3s ease", fontSize: "1.2rem" }}>{menu.nombre}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
