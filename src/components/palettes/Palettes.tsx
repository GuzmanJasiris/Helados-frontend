
import { useEffect, useState } from "react";
import './Palettes.css'

export const Palettes = () => {
  const [palettes, setPalettes] = useState([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "palettes";

  const getPalettes = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setPalettes(data);
  };

  useEffect(() => {
    getPalettes();
  }, []);
  
  
  return (
    <div className="container" >
      <h1>Productos</h1>


      {palettes.map((palette: any) => {
        return (
          <div key={palette.id} className="container-paleta">

            <h2>{palette.nombre}</h2>
            <img src={`${palette.imagen}`}
            srcSet={`${palette.imagen}`}
            />
            <p>Descripcion: {palette.descripcion}</p>
            
            

            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <h2>Ver mas</h2>
                </div>
                <div class="card-back">
                <p>Sabor: {palette.sabor}</p>
                <p>Precio: C$ {palette.precio}</p>
                <button>Comprar</button>
                </div>
              </div>
            </div>


          </div>

        );
      })}
    </div>
  )
}