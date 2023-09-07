'use client';
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importa Chart.js
import { Roboto_Mono } from 'next/font/google';

// Declaración de fuentes y estilos
const roboto_Mono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] });

const ComposicionCorporalForm = () => {
    // Declaración de variables de estado para los datos ingresados y resultados

    const [genero, setGenero] = useState('');
    const [edad, setEdad] = useState('');
    const [peso, setPeso] = useState('');
    const [talla, setTalla] = useState('');
    const [tricep, setTricep] = useState('');
    const [bicep, setBicep] = useState('');
    const [subescapular, setSubescapular] = useState('');
    const [supraileaco, setSupraileaco] = useState('');
    const [femur, setFemur] = useState('');
    const [biestiloideo, setBiestiloideo] = useState('');
    const [resultado, setResultado] = useState('');
    const [densidad, setDensidad] = useState('');
    const [masaOsea, setMasaOsea] = useState('');
    const [masaResidual, setMasaResidual] = useState('');
    const [masaOseaP, setMasaOseaP] = useState('');
    const [masaResidualP, setMasaResidualP] = useState('');
    const [masaGrasaK, setMasaGrasaK] = useState('');
    const [masaMuscularP, setMasaMuscularP] = useState('');
    const [masaMuscularK, setMasaMuscularK] = useState('');

    // Función para calcular la composición corporal
    const calcularResultado = () => {
        const sumaPliegues = parseFloat(tricep) + parseFloat(bicep) + parseFloat(subescapular) + parseFloat(supraileaco);
        let dc = 0;
        

        // Cálculo de densidad corporal (dc) en función del género
        if (genero === 'H') {
            dc = 1.1765 - 0.0744 * Math.log10(sumaPliegues);
            console.log(dc);
            setDensidad(dc);

        } else if (genero === 'M') {
            dc = 1.1567 - 0.0717 * Math.log10(sumaPliegues);
            setDensidad(dc);
        }

        // Cálculo del porcentaje de grasa y otros valores
        const porcentajeGrasa = (495 / dc) - 450;
        setResultado(porcentajeGrasa.toFixed(2));
        setMasaGrasaK(((porcentajeGrasa/100) * peso).toFixed(2));

        const estaturaMetros = parseFloat(talla) / 100; // Convertir a metros
        const masaOseaCalculada = (
            Math.pow(estaturaMetros, 2) * parseFloat(femur/100) * parseFloat(biestiloideo/100) * 400
        ) ** 0.712 * 3.02;
        setMasaOsea(masaOseaCalculada.toFixed(2));
        setMasaOseaP(((masaOseaCalculada / peso)*100).toFixed(2));

        const masaResidualCalculada = genero === 'H' ? parseFloat(peso) * 0.24 : parseFloat(peso) * 0.21;
        setMasaResidual(masaResidualCalculada.toFixed(2));
        setMasaResidualP(((masaResidualCalculada / peso)*100).toFixed(2));
        setMasaMuscularP((100-((masaOseaCalculada / peso)*100)-porcentajeGrasa-((masaResidualCalculada / peso)*100)).toFixed(2));
        setMasaMuscularK((peso-masaOseaCalculada-((porcentajeGrasa / 100)*peso)-masaResidualCalculada).toFixed(2));
       
            // Declara una referencia para el elemento canvas

        
        
        
    };

    const chartRef = useRef(null);

    // Función para crear la gráfica
    const createChart = () => {
        if (chartRef.current && resultado !== '' && masaOseaP !== '' && masaResidualP !== '' && masaMuscularP !== '') {
            const ctx = chartRef.current.getContext('2d');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Masa Grasa', 'Masa Ósea', 'Masa Residual', 'Masa Muscular'],
                    datasets: [{
                        label: '% de cada dato calculado',
                        data: [
                            parseFloat(resultado),
                            parseFloat(masaOseaP),
                            parseFloat(masaResidualP),
                            parseFloat(masaMuscularP),
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1,
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                color: 'blue', // Cambia el color de los números de graduación
                                stepSize: 10, // Cambia el espaciado entre los números de graduación
                            },
                            grid: {
                                color: 'gray', // Cambia el color de las líneas de la cuadrícula
                            },
                        },
                    },
                },
            });
        }
    };

    // Llama a la función para crear la gráfica cuando cambian los datos
    useEffect(() => {
        createChart();
    }, [resultado, masaOseaP, masaResidualP, masaMuscularP]);
    
    // Renderizado del componente
    return (
        <div className="text-center bg-secondary h-screen w-full">
            <h1 className={`text-white text-4xl mt-6 text-center ${roboto_Mono.className}`}><strong>Composición Corporal</strong></h1>
            <div className="flex justify-start ">
                <form style={{ paddingTop: '30px', width: '30%', marginLeft: '20px' }} action="">
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Género:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Edad:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Peso:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Talla:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={talla}
                            onChange={(e) => setTalla(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Tricipital:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={tricep}
                            onChange={(e) => setTricep(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Bicipital:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={bicep}
                            onChange={(e) => setBicep(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Subescapular:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={subescapular}
                            onChange={(e) => setSubescapular(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Supraileaco:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={supraileaco}
                            onChange={(e) => setSupraileaco(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Femur:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={femur}
                            onChange={(e) => setFemur(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>Biestiloideo:</label>
                        <input
                            style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
                            type="text"
                            value={biestiloideo}
                            onChange={(e) => setBiestiloideo(e.target.value)}
                        />
                    </div>
                </form>
                <div className="flex flex-col justify-center items-start  px-28">
                    <div className="border rounded-lg p-4 mb-2 text-customColor text-2xl">
                        {/* Mostrar el resultado aquí */}
                        % Grasa: {resultado}
                        
                    </div>
                    {/* <div className="flex flex-col justify-center items-center p-36"> */}
                    <div className="border rounded-lg p-4 mb-2 text-customColor text-2xl text-left">
                        DC: {densidad}
                    </div>
                    <div className="border rounded-lg p-4 mb-2 text-customColor text-2xl">
                        Masa Ósea: {masaOsea} kg
                    </div>
            
                    <div className="border rounded-lg p-4 mb-2 text-customColor text-2xl">
                        Masa Residual: {masaResidual} kg
                    </div>
                    <div>
                    {/* <table className="border-collapse border border-gray-400 mt-4 mx-auto text-left">
                <thead>
                    <tr className="bg-gray-300 text-center ">
                        <th className="border text-2xl border-gray-400 p-2 text-customColor rounded-tl-lg">Descripción</th>
                        <th className="border text-2xl border-gray-400 p-2 text-customColor">%</th>
                        <th className="border text-2xl border-gray-400 p-2 text-customColor rounded-tr-lg">KG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border text-2xl border-gray-400 p-2 text-customColor "><strong>Masa Grasa</strong></td>
                        <td className="border border-gray-400 p-2 text-xl text-customColor">{resultado} %</td>
                        <td className="border border-gray-400 p-2 text-xl text-customColor">{masaGrasaK} KG</td>

                    </tr>
                    <tr>
                        <td className="border text-2xl border-gray-400 p-2 text-customColor"><strong>Masa Ósea</strong></td>
                        <td className="border border-gray-400 p-2 text-xl text-customColor">{masaOseaP} %</td>
                        <td className="border border-gray-400 p-2 text-xl text-customColor">{masaOsea} KG</td>
                    </tr>
                    <tr>
                        <td className="border text-2xl border-gray-400 p-2 text-customColor"><strong>Masa Residual</strong></td>
                        <td className="border border-gray-400 p-2 text-xl text-customColor">{masaResidualP} %</td>
                        <td className="border border-gray-400 p-2 text-xl text-customColor">{masaResidual} KG</td>
                    </tr>
                    <tr>
                        <td className="border text-2xl border-gray-400 p-2 text-customColor"><strong>Masa Muscular</strong></td>
                        <td className="border border-gray-400 p-2 text-xl text-customColor">{masaMuscularP} %</td>
                        <td className="border border-gray-400 p-2 text-xl text-customColor">{masaMuscularK} KG</td>
                    </tr>

                </tbody>
            </table> */}
            </div>
            <div className='bg-customColor'>
                {/* Agrega el elemento canvas para la gráfica */}
                <canvas ref={chartRef} width={'400'} height={'300'} backgroundColor></canvas>
            </div>

            
            <div className='py-1'></div>
                <button className="bg-thirty text-customColor py-2 px-4 rounded " onClick={calcularResultado}>
                    Calcular
                </button>
            </div>
            </div>
        </div>
    
    
    );
};

export default ComposicionCorporalForm;