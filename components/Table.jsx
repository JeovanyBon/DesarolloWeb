import React from 'react';

const TablaResultados = ({
  resultado,
  masaGrasaK,
  masaOseaP,
  masaOsea,
  masaResidualP,
  masaResidual,
  masaMuscularP,
  masaMuscularK,
}) => {
  return (
    <div>
      <table className="border-collapse border border-gray-400 mt-4 mx-auto text-left">
        <thead>
          <tr className="bg-gray-300 text-center">
            <th className="border text-2xl border-gray-400 p-2 text-customColor rounded-tl-lg">Descripción</th>
            <th className="border text-2xl border-gray-400 p-2 text-customColor">%</th>
            <th className="border text-2xl border-gray-400 p-2 text-customColor rounded-tr-lg">KG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border text-2xl border-gray-400 p-2 text-customColor">
              <strong>Masa Grasa</strong>
            </td>
            <td className="border border-gray-400 p-2 text-xl text-customColor">{resultado} %</td>
            <td className="border border-gray-400 p-2 text-xl text-customColor">{masaGrasaK} KG</td>
          </tr>
          <tr>
            <td className="border text-2xl border-gray-400 p-2 text-customColor">
              <strong>Masa Ósea</strong>
            </td>
            <td className="border border-gray-400 p-2 text-xl text-customColor">{masaOseaP} %</td>
            <td className="border border-gray-400 p-2 text-xl text-customColor">{masaOsea} KG</td>
          </tr>
          <tr>
            <td className="border text-2xl border-gray-400 p-2 text-customColor">
              <strong>Masa Residual</strong>
            </td>
            <td className="border border-gray-400 p-2 text-xl text-customColor">{masaResidualP} %</td>
            <td className="border border-gray-400 p-2 text-xl text-customColor">{masaResidual} KG</td>
          </tr>
          <tr>
            <td className="border text-2xl border-gray-400 p-2 text-customColor">
              <strong>Masa Muscular</strong>
            </td>
            <td className="border border-gray-400 p-2 text-xl text-customColor">{masaMuscularP} %</td>
            <td className="border border-gray-400 p-2 text-xl text-customColor">{masaMuscularK} KG</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaResultados;
