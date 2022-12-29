import React, { useState } from "react"
import Header from "./Header";
import SideBar from "./Sidebar";
import crud from "../conections/crud";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

//remember to use tailwind for html 
const CrearCategoria = () => {

    const navigate = useNavigate();
    //enviar la informacion a bd mongo
    //crear el objeto con el hook use state 
    const [categoria, setCategoria] = useState({
        nombre:'',
        imagen:''
    });
    //armar el objeto json 
    const {nombre, imagen} = categoria;
    // usar la funcion on change para obtener los datos ingresados
    const onChange = (data)  => {
        setCategoria({
            ...categoria,
            [data.target.name]: data.target.value
        })
    };

    const ingresarCategoria = async () => {
        if (!nombre || !imagen) {
            var mensaje = "Please Fill All Spaces"
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
            })

        } else {
        const data = {
            nombre: categoria.nombre,
            imagen: categoria.imagen
        }
        console.log(data);
        const response = await crud.POST(`/api/categories`, data);
        const msg = response.msg;
        var mensaje = "New category created"
            swal({
                title:'Info',
                text: mensaje,
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
        navigate(-1);
        
        }
    };

    const onSubmit = ( e ) => {
        e.preventDefault();
        ingresarCategoria();
    }

    return(
        <>
            <Header/>
            <div className="md:flex md:min-h-screen">
                <SideBar/>
                <main className="flex-1">
                    <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                        <h1>
                        Create Category 
                        </h1>
                    </div>
                    <div className="mt-109 flex justify-center">
                        <form
                        onSubmit={onSubmit}
                            className="my-10 bg-sky-200 shadow rounded-md p-10"
                            >
                            <div className="my-5">
                                <label className="uppercase text-zinc-700  text-xl font-bold"> Category Name </label>
                            <input 
                                type="nombre"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={onChange}
                                placeholder="Category"
                                className="w-full  mt-3 p-3 border rounded-xl bg-white"
                            />
                            </div>
                            <div>

                            <label className="uppercase text-zinc-700  text-xl font-bold"> Category Image </label>
                            <input 
                                type="text"
                                id="imagen"
                                name="imagen"
                                value={imagen}
                                onChange={onChange}
                                placeholder= "Image"
                                className="w-full  mt-3 p-3 border rounded-xl bg-white"
                            />
                            </div>
                            <input
                                type="submit"
                                value="submit"
                                className="bg-red-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-red-500 transition-colors my-7"
                                >
                            </input>


                        </form>
                    </div> 
                </main>
            </div>
        </>
    )
}

export default CrearCategoria;