import React from 'react';
import { Roboto_Mono } from 'next/font/google';

// Definición de la fuente Roboto Mono
const roboto_Mono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] });

// Componente AcercaDe
const AcercaDe = () => {
    return (
        <div className="bg-secondary min-h-screen flex flex-col justify-center items-center">
            {/* Título */}
            <h1 className={`text-white text-3xl mt-6 text-center ${roboto_Mono.className}`}>Acerca de..</h1>
            <div className="bg-primary rounded-lg shadow-lg p-8 mt-8 flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/3 text-center md:mr-8">
                    {/* Imagen de perfil */}
                    <img
                        src="../images/yo.jpg"
                        alt="Foto de perfil"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    {/* Nombre y correo */}
                    <p className="text-gray-800 font-semibold">Jeovany Bonilla</p>
                    <p className="text-gray-600">al19760613@example.com</p>
                    {/* Puedes agregar más información de contacto aquí */}
                </div>
                <div className="md:w-2/3 mt-4 md:mt-0">
                    {/* Descripción */}
                    <p className="text-gray-800">
                        ¡Hola! Actualmente soy estudiante del Instituto Tecnológico de Ensenada. La finalidad de esta página web
                        es que comprendas lo que se puede realizar en nuestro curso.
                    </p>
                    <p className="text-gray-800 mt-4">
                        Si tienes alguna pregunta o simplemente quieres charlar, no dudes en contactarme.
                    </p>
                    {/* Puedes agregar más información sobre ti o tu proyecto aquí */}
                </div>
            </div>
        </div>
    );
};

export default AcercaDe;
