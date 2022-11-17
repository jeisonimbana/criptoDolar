import criptosApi from "../../api/baseApi";
import { getListCriptos } from "./criptoSlice"

export const getListCriptosAsync = () => {
  return async(dispatch) => {

    try {
      const { data } = await criptosApi.get('/?start=0&limit=100');
      return dispatch(getListCriptos(data.data))
    } catch (error) {
      console.log("Error en la base de datos");
    }


  }
}