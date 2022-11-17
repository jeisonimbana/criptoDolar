import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";

const Home = () => {
  const { criptos } = useSelector((state) => state.criptos);

  const [criptoValues, setCriptoValues] = useState({
    namecripto:"f",
    valorCript:0
  })
  const [valueDolar, setValueDolar] = useState(0)


  const changeCripto = (e) => {
    setCriptoValues((valores)=>({
      ...valores,
      [e.target.name] : e.target.value
    }))
  }

  useEffect(() => {

      if(criptoValues.namecripto !== "f"){
        const criptoFind = criptos.find(cripto => cripto.id === criptoValues.namecripto)
        console.log(criptoFind.price_usd);
        const valueDolarEnd = parseFloat(criptoValues.valorCript) * parseFloat(criptoFind.price_usd)
        setValueDolar(valueDolarEnd )
      }

  }, [criptoValues])
  

  return (
    <div className="home_container">
      <div className="convertir">
        <div className="home_title">
          <h1>Convierte cripto-monedas a dolares </h1>
          <h3>e informate del precio actual</h3>
        </div>
        <div className="home_convertir">
          <input name="valorCript" type="text" placeholder="Agrega la cantidad " onChange={changeCripto} />
          <select name="namecripto" defaultValue={"f"} onChange={changeCripto}>
            <option  value="f" disabled>
              Seleccione la moneda
            </option>
            {criptos.map((cripto) => (
              <option key={cripto.id} value={cripto.id}>{cripto.name}</option>
            ))}
          </select>
        </div>
        <div className="catidad_dolares">
          <span>Dolares: $ {valueDolar}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
