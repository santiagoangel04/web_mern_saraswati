import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../Sidebar";
import Header from "../Header";
import crud from "../../conections/crud";
import swal from "sweetalert";

const ActualizarCategoria= () => {

    const navigate = useNavigate();
    
    const {idCategoria} = useParams();
   // console.log(idCategoria)
    
    const [ categoria, setCategoria ] = useState({
        nombre:'',
        imagen:''
    });

    const cargarCategoria = async () => {
        const response =  await crud.GET(`/api/categories/${idCategoria}`);
        console.log(response);
        setCategoria(response.category)
    }
   
    useEffect(() => {
       cargarCategoria();
    },[]);
    console.log(categoria);

    const {nombre, imagen} = categoria;

    const onChange = (e) => {
        setCategoria({
            ...categoria,
                [e.target.name]: e.target.value
        })
    }

    const actualizarCat = async () => {
        const data = {
            nombre: categoria.nombre,    // condicionar el update categoria 
            imagen: categoria.imagen
        }

        const response = await crud.PUT(`/api/categories/${idCategoria}`, data)
        console.log(response)
        var mensaje = "Category updated"
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
        navigate("/listaCategorias");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        actualizarCat();
    }

    return(
        <>
            <Header/>
            <div className="md:flex md:min-h-screen">
                <SideBar/>
                <main className="flex-1">
                    <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                        <h1>
                        Update Category 
                        </h1>
                    </div>
                    <div>
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
                             value="Update"
                             className="bg-red-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-red-500 transition-colors my-7"
                             >
                         </input>

                        </form>
                    </div>

                </main>
            </div>
        </>
    );
}

export default ActualizarCategoria;