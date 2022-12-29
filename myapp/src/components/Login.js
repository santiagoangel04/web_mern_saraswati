import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from "../conections/crud"; // llamado para el back
import swal from "sweetalert";
// const to be rendered in App 
const Login = () => { 
  const navigate = useNavigate();

  //acceder a cuenta
  const SignIn = () => {
    navigate("/crear-cuenta")
  };
  //hook de useState para inicializar y usar las variables
  const [usuario, setUsuario] = useState({
    email:'',
    password:'',
  });

  //armar json
  const {email, password} = usuario;

  //verificar y cargar los datos en usuario, onchange es el atributo que tienen cada una de las cajas
  const onChange = ( e ) => {
    setUsuario ({
        ...usuario,   
        [e.target.name]: e.target.value
    })  
  };

  const ingresarCuenta = async () => {
    //crear la constante donde se guardaran los datos 
    const data = {
      email: usuario.email,
      password: usuario.password
    } 
    console.log(data);
    //llamado al crud post para enviar la informacion del hook
    const response = await crud.POST(`/api/auth`, data);
    const msg = response.msg;
   
    switch (msg) {
      case "User not found":
        swal({
          title:'Error',
          text: msg,
          icon: 'error',
          buttons:{
              confirm:{
                  text: 'ok',
                  value: true,
                  visible:true,
                  className: 'btn btn-danger',
                  closeModal:true
              }
          }
        });
        break;

      case "Wrong passsword":
        swal({
          title:'Error',
          text: msg,
          icon: 'error',
          buttons:{
              confirm:{
                  text: 'ok',
                  value: true,
                  visible:true,
                  className: 'btn btn-danger',
                  closeModal:true
              }
          }
        });
        break;
      
      default:
        console.log(response.token);
        const jwt = response.token;
        //guardar la informacion en el localstorage 
        localStorage.setItem('token', jwt);
        console.log(response.token);
        navigate("/admin");
        break;
    }
  }
    
  const onSubmit = ( e ) => {
      e.preventDefault(); // evitar que se refresque la pagina 
      ingresarCuenta();
  }

  return ( 
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
          <div className='md:w-2/3 lg:w-2/5'>
          <h1 className='inline bg-gradient-to-r bg-sky-200 bg-clip-text font-display text-5xl tracking-tight text-transparent'> 
            LOG IN
          </h1>
          <form 
          className="my-10 bg-sky-200 shadow rounded-lg p-2"
          onSubmit= {onSubmit}>
            <div className="my-5">
            <label className="uppercase text-zinc-700  text-xl font-bold"> Email </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full mt-3 p-3 border rounded-xl bg-white"
              value = {email} 
              onChange = {onChange}/>
          
              <label className="uppercase text-zinc-700  text-xl font-bold"> Password</label>
              <input type="password"
               id="password"
               name="password" 
               value={password}
               onChange={onChange}
               className="w-full mt-3 p-3 border rounded-xl bg-white"/>
            </div>
            <input 
                type="submit" //it has to be of type submit to submit the info 
                value=" LOG IN  "
                className="bg-red-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-red-500 transition-colors my-7"
            />
          
            <input 
                type="submit" //it has to be of type submit to submit the info 
                value=" Sign In"
                className="bg-red-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-red-500 transition-colors my-7"
                onClick={SignIn}
            />
           
          </form>

          </div>
        </main>
  );
};


export default Login;