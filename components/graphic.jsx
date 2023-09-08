import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CompositionCorpChart = ({
  resultado,
  masaOseaP,
  masaResidualP,
  masaMuscularP,
}) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Referencia para el gráfico

  // Función para crear la gráfica
  const createChart = () => {
    if (chartRef.current) {
      // Comprueba si ya existe un gráfico y destrúyelo utilizando la referencia
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
  
      const ctx = chartRef.current.getContext('2d');
  
      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Masa Grasa', 'Masa Ósea', 'Masa Residual', 'Masa Muscular'],
          datasets: [
            {
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
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                color: 'blue',
                stepSize: 10,
              },
              grid: {
                color: 'gray',
              },
            },
          },
        },
      });

      // Asigna el nuevo gráfico a la referencia
      chartInstanceRef.current = newChartInstance;
    }
  };

  // Llama a la función para crear la gráfica cuando cambian los datos
  useEffect(() => {
    createChart();
  }, [resultado, masaOseaP, masaResidualP, masaMuscularP]);

  return (
    <div className="bg-customColor">
      {/* Agrega el elemento canvas para la gráfica */}
      <canvas ref={chartRef} width={'400'} height={'200'}></canvas>
    </div>
  );
};

export default CompositionCorpChart;
