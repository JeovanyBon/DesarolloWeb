'use client';
import React, { useState } from "react";
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

// Estilos CSS personalizados para el menú
const menuStyles = {
  container: {
    width: "230px",
    backgroundColor: "#333",
    height: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#fff",
    textAlign: "center"
  },
  ul: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    width: "100%"
  },
  li: {
    marginBottom: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, color 0.3s ease",
    border: "1px solid transparent"
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    padding: "10px",
    fontSize: "1.2rem",
    textAlign: "center",
    cursor: "pointer"
  },
  linkHover: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "1px solid #007bff"
  }
};

// Componente de menú de navegación
function Menu() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div style={menuStyles.container}>
      <h1 style={menuStyles.title}>Menú de Navegación</h1>
      <ul style={menuStyles.ul}>
        {/* Mapeo de las rutas del menú */}
        {menuRoutes.map((menu, index) => (
          <li
            style={{
              ...menuStyles.li,
              border: `1px solid ${menuStyles.link.color}`,
              backgroundColor:
                hoveredLink === index ? menuStyles.linkHover.backgroundColor : ""
            }}
            key={index}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {/* Enlace de navegación */}
            <div style={menuStyles.link}>
              <Link href={menu.ruta}>{menu.nombre}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

