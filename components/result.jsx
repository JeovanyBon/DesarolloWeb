import React from 'react';

const CompositionCorpResult = ({
  resultado,
  densidad,
  masaOsea,
  masaResidual,
  masaOseaP,
  masaResidualP,
  masaGrasaK,
  masaMuscularP,
  masaMuscularK,
}) => {
  return (
    <div className="flex flex-col justify-center items-start  px-28">
      <div className="border rounded-lg p-4 mb-2 text-customColor text-2xl">
        % Grasa: {resultado}
      </div>
      <div className="border rounded-lg p-4 mb-2 text-customColor text-2xl text-left">
        DC: {densidad}
      </div>
      <div className="border rounded-lg p-4 mb-2 text-customColor text-2xl">
        Masa Ósea: {masaOsea} kg
      </div>
      <div className="border rounded-lg p-4 mb-2 text-customColor text-2xl">
        Masa Residual: {masaResidual} kg
      </div>
      
    </div>
  );
};

export default CompositionCorpResult;
