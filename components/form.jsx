import React, { useState } from 'react';

const CompositionCorpForm = ({
  genero,
  edad,
  peso,
  talla,
  tricep,
  bicep,
  subescapular,
  supraileaco,
  femur,
  biestiloideo,
  setGenero,
  setEdad,
  setPeso,
  setTalla,
  setTricep,
  setBicep,
  setSubescapular,
  setSupraileaco,
  setFemur,
  setBiestiloideo,
  calcularResultado,
}) => {
  return (
    <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px',paddingTop: '30px', width: '100%', maxWidth: '600px', margin: '0 auto' }} action="">
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Género:</label>
          <select
          style={{
            flex: 2,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1rem',
          }}
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value=""></option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Edad:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Peso:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Talla:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={talla}
          onChange={(e) => setTalla(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Tricipital:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={tricep}
          onChange={(e) => setTricep(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Bicipital:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={bicep}
          onChange={(e) => setBicep(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Subescapular:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={subescapular}
          onChange={(e) => setSubescapular(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Supraileaco:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={supraileaco}
          onChange={(e) => setSupraileaco(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Femur:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={femur}
          onChange={(e) => setFemur(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ flex: 1, textAlign: "right", marginRight: "15px", fontWeight: "bold" }}>
          Biestiloideo:</label>
        <input
          style={{ flex: 2, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" }}
          type="number"
          value={biestiloideo}
          onChange={(e) => setBiestiloideo(e.target.value)}
        />
      </div>
    </form>
  );
};

export default CompositionCorpForm;
