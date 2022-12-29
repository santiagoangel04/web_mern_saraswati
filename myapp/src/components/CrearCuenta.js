import crud from '../conections/crud';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // imports link to send the function to the app file 
import swal from "sweetalert";

const CrearCuenta = () => {
    const navigate = useNavigate();
    //hook de use state para inicializar y usar las variables se inicia una variable State
    /*What does useState return? It returns a pair of values: the current state and a function that updates it. 
    This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair*/
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    //armar json
    const {nombre, email, password, confirmar} = usuario;

    //verificar y cargar los datos en usuario
    const onChange = ( e ) => {
        setUsuario ({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    //validaciones para los campos y el ingreso
    const crearCuenta = async () => {
        if (!nombre || !email || !password ) {
            var mensaje = "Please fill all spaces"
            swal({
                title:'Error',
                text: mensaje,
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

        } else if (password !== confirmar) {
            var mensaje = "Passwords do not match!"
            swal({
                title:'Error',
                text: mensaje,
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

        } else {
            const data = {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password 
            }

            console.log(data);
            const response = await crud.POST(`/api/users`, data);    
            const mensaje = response.msg;
            console.log(mensaje);
            if (mensaje === "Method not allowed: User already exists") {
                var mens = "Method not allowed: User already exists";
                swal({
                    title:'Error',
                    text: mens,
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

            } else {

                var msgSucc = "User Created Successfully"
                swal({
                    title:'info',
                    text: msgSucc,
                    icon: 'success',
                    buttons:{
                        confirm:{
                            text: 'ok',
                            value: true,
                            visible:true,
                            className: 'btn btn-primary',
                            closeModal:true
                        }
                    }
                });

                setUsuario({
                    nombre:'',
                    email:'',
                    password:'',
                    confirmar:''
                });

                //redireccionar nuevamente a ingreso
                navigate("/Login");
            }
        }
    };

    const onSubmit = ( e ) => {
        e.preventDefault();
        crearCuenta();
    }

    return (
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
            <div className="md:w-2/3 lg:w-2/5">
            <h1 className="inline bg-gradient-to-r text-sky-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                SIGN IN 
            </h1>
            <form 
                className="my-10 bg-sky-200 shadow rounded-lg p-10"
                onSubmit= {onSubmit}
            >
                <div className="my-5">
                    <label className="uppercase text-zinc-700  text-xl font-bold"> Name </label>
                    <input 
                    type="nombre" 
                    id="nombre" 
                    name="nombre" 
                    className="w-full mt-3 p-3 border rounded-xl bg-white" 
                    value={nombre} 
                    onChange={onChange} />
                </div>
                <div>
                    <label className="uppercase text-zinc-700  text-xl font-bold"> Email </label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full mt-3 p-3 border rounded-xl bg-white" 
                    value={email} 
                    onChange={onChange}/>
                </div>
                <div>
                    <label className="uppercase text-zinc-700  text-xl font-bold"> Password </label>
                    <input 
                    type="password"
                    id="password"
                    name="password" 
                    className="w-full mt-3 p-3 border rounded-xl bg-white"
                    value={password}
                    onChange={onChange}/>
                </div>
                <div>
                    <label className="uppercase text-zinc-700  text-xl font-bold"> Confirm Password </label>
                    <input 
                    type="password"
                    id="confirmar"
                    name="confirmar" 
                    className="w-full mt-3 p-3 border rounded-xl bg-white"
                    value={confirmar}
                    onChange={onChange}/>
                </div>

                <input 
                type="submit"
                value="Sign In"
                className="bg-red-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-red-500 transition-colors my-7"
                />

                <Link className=" flex-1 text-stone-900 uppercase font-bold rounded hover:cursor-pointer hover:bg-red-600 transition-colors " to={"/Login"}> Go Back </Link>

            </form>
            </div>
        </main>
    );
};

export default CrearCuenta;