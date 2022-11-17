import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getListCriptosAsync } from "../../store/criptos/criptoAsync";
const valueUsers = [1, 1, 1, 1];

const CriptoList = () => {
  const { criptos } = useSelector((state) => state.criptos);
  const dispatch = useDispatch();
  const [valueSearch, setvalueSearch] = useState("");
  const [valueCriptos, setValueCriptos] = useState(criptos);

  const handleSearch = (e) => {
    setvalueSearch(e.target.value.toUpperCase());
  };

  useEffect(() => {
    dispatch(getListCriptosAsync());
  }, []);

  useEffect(() => {
    const newArray = criptos.filter((cripto) =>
    cripto.name.toUpperCase().includes(valueSearch)
    );

    setValueCriptos(newArray);
  }, [valueSearch]);

  return (
    <div className="userPage">
      <div className="cardsList">
        <div className="cardsListSearch">
          <div className="cardsListSearchContainer">
            <input
              placeholder="Buscar por nombre"
              onChange={handleSearch}
              className="cardsListInput"
              type="text"
            />
            <BiSearchAlt className="footerCopyIcon cardList_search" />
          </div>
        </div>
        <div className="cardsListContain">
          {valueCriptos.map((cripto, i) => (
            <Card key={cripto.id} cripto={cripto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CriptoList;
