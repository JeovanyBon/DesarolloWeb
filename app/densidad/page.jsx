'use client';
import React, { useState, useEffect } from 'react';
import { Roboto_Mono } from 'next/font/google';
import CompositionCorpForm from '../../components/form';
import CompositionCorpChart from '../../components/graphic';
import CompositionCorpResult from '../../components/result';

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
    const sumaPliegues =
      parseFloat(tricep) +
      parseFloat(bicep) +
      parseFloat(subescapular) +
      parseFloat(supraileaco);
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
    setMasaGrasaK(((porcentajeGrasa / 100) * peso).toFixed(2));

    const estaturaMetros = parseFloat(talla) / 100; // Convertir a metros
    const masaOseaCalculada =
      Math.pow(estaturaMetros, 2) *
      (parseFloat(femur) / 100) *
      (parseFloat(biestiloideo) / 100) *
      400;
    setMasaOsea(masaOseaCalculada.toFixed(2));
    setMasaOseaP(((masaOseaCalculada / peso) * 100).toFixed(2));

    const masaResidualCalculada =
      genero === 'H' ? parseFloat(peso) * 0.24 : parseFloat(peso) * 0.21;
    setMasaResidual(masaResidualCalculada.toFixed(2));
    setMasaResidualP(((masaResidualCalculada / peso) * 100).toFixed(2));
    setMasaMuscularP(
      (
        100 -
        ((masaOseaCalculada / peso) * 100) -
        porcentajeGrasa -
        ((masaResidualCalculada / peso) * 100)
      ).toFixed(2)
    );
    setMasaMuscularK(
      (
        peso -
        masaOseaCalculada -
        ((porcentajeGrasa / 100) * peso) -
        masaResidualCalculada
      ).toFixed(2)
    );
  };

  // Renderizado del componente
  return (
    <div className="text-center bg-secondary h-screen w-full">
        <h1 className={`text-customColor text-4xl mt-0 text-center  ${roboto_Mono.className}`}
        style={{paddingBottom: '25px'}}>
            <strong>Composición Corporal</strong>
        </h1>
        <div className="flex justify-start ">
            <CompositionCorpForm
                genero={genero}
                edad={edad}
                peso={peso}
                talla={talla}
                tricep={tricep}
                bicep={bicep}
                subescapular={subescapular}
                supraileaco={supraileaco}
                femur={femur}
                biestiloideo={biestiloideo}
                setGenero={setGenero}
                setEdad={setEdad}
                setPeso={setPeso}
                setTalla={setTalla}
                setTricep={setTricep}
                setBicep={setBicep}
                setSubescapular={setSubescapular}
                setSupraileaco={setSupraileaco}
                setFemur={setFemur}
                setBiestiloideo={setBiestiloideo}
                calcularResultado={calcularResultado}
            />
            <div className="flex flex-col justify-center items-center  px-20">
                <CompositionCorpResult
                    resultado={resultado}
                    densidad={densidad}
                    masaOsea={masaOsea}
                    masaResidual={masaResidual}
                    masaOseaP={masaOseaP}
                    masaResidualP={masaResidualP}
                    masaGrasaK={masaGrasaK}
                    masaMuscularP={masaMuscularP}
                    masaMuscularK={masaMuscularK}
                />
                <CompositionCorpChart
                    resultado={resultado}
                    masaOseaP={masaOseaP}
                    masaResidualP={masaResidualP}
                    masaMuscularP={masaMuscularP}
                />
                <div className="py-1">
                </div>
                <button className="bg-thirty text-customColor py-2 px-4 rounded " onClick={calcularResultado}>
                    Calcular
                </button>
            </div>
        </div>
    </div>
  );
};

export default ComposicionCorporalForm;
