import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Card = ({cripto}) => {
  return (
    <div  className="cardsListCard">
      <div className="cardsListCard_title">
        <h1 className="cardsListTitle">{cripto.symbol}</h1>
        <h3>{cripto.name}</h3>
      </div>
      <div className="cardsListInfo">
        <div className="cardListInfoItem">
          <h5>Precio Dolar</h5>
          <span>$ {cripto.price_usd} </span>
        </div>
        <div className="cardListInfoItem">
          <h5>Variacion 24h</h5>
            {
              (parseFloat(cripto.percent_change_24h) > 0)
              ? <AiOutlineArrowUp style={{color:"green"}}/>
              : <AiOutlineArrowDown style={{color:"red"}}/>
            }
          <span>{cripto.percent_change_24h}</span>
        </div>
        <div className="cardListInfoItem">
        
          <h5>Volumen</h5>
          <span>{cripto.volume24}</span>
        </div>
        <div className="cardListInfoItem">
          <h5>Precio Bitcoin</h5>
          <span>{cripto.price_btc}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
