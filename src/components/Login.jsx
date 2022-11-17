import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../hooks/useForm";
import { onLogin } from "../store/auth/authSlice";

const initialForm = {
  name:"",
  password:""
}

const Login = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(initialForm)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('cobrando', formValues.name);
    dispatch(onLogin(formValues))
  }


  return (
    <section className="login_container">
      <form onSubmit={handleSubmit} className="login_form">

        <input onChange={handleInputChange} value={formValues.name} name="name"  className="login_username" type="text"  placeholder="Ingresa cualquier nombre"/>
        <input onChange={handleInputChange} value={formValues.password} name="password" className="login_password" type="password"  placeholder="Ingresa cualquier contraseña"/>
        <button type="submit" className="login_submit">Ingresar</button>
      
      </form>
    </section>
  );
};

export default Login;
