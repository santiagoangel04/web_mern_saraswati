import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import SideBar from "../Sidebar";
import crud from "../../conections/crud";
import swal from "sweetalert";

const CrearProductos = () => {
    
    const navigate  = useNavigate();

    const {idCategoria} = useParams();

    const [producto, setProducto] = useState({
        nombre:'',
        descripcion:'',
        stock:'',
        precio:'',
        imagen:'',
        categoryId:''
    });

    const {nombre, descripcion, stock, precio, imagen}  = producto;

    const onChange = (data) => {
        setProducto({
            ...producto,
            [data.target.name] : data.target.value
        })
    };

    const ingresarProducto = async () => {
        if (!nombre || !descripcion || !stock || !precio || !imagen) {
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
            });
            
        }else {
        const data = {
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            stock: producto.stock,
            precio: producto.precio,
            imagen: producto.imagen,
            categoryId: idCategoria
            
        };

        console.log(data)
        const response = await crud.POST(`/api/products/`, data);    //realizar condicionales if para creacion de producto 
        const msg = response.msg;
        console.log(msg);

        var mensaje = "Product Created"
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
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        ingresarProducto();
    }

    return ( 
        <>
            <Header/>
            <div className=" md:flex md:min-h-screen">
                <SideBar/>
                <main className="flex-1">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg flex-1">
                        <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                            <h1>
                            Create Product
                            </h1>
                        </div>
                        
                            <div className="mt-109 flex justify-center">
                            <form
                                className="my-10 bg-sky-200 shadow rounded-md p-10"
                                onSubmit= {onSubmit}
                            >
                            <div className="my-5">
                                <label className="uppercase text-zinc-700  text-xl font-bold"> Product Name </label>
                                     <input 
                                        type="nombre" 
                                        id="nombre" 
                                        name="nombre" 
                                        className="w-full mt-3 p-3 border rounded-xl bg-white" 
                                        value={nombre} 
                                        onChange={onChange} />
                             </div>
                            <div>
                                <label className="uppercase text-zinc-700  text-xl font-bold"> Description  </label>
                                    <input 
                                        type="text" 
                                        id="descripcion" 
                                        name="descripcion" 
                                        className="w-full mt-3 p-3 border rounded-xl bg-white" 
                                        value={descripcion} 
                                        onChange={onChange}/>
                            </div>
                            <div>
                                <label className="uppercase text-zinc-700  text-xl font-bold"> Stock</label>
                                    <input 
                                    type="number"
                                    id="stock"
                                    name="stock" 
                                    className="w-full mt-3 p-3 border rounded-xl bg-white"
                                    value={stock}
                                    onChange={onChange}/>
                            </div>
                            <div>
                                <label className="uppercase text-zinc-700  text-xl font-bold"> Price </label>
                                    <input 
                                    type="number"
                                    id="precio"n
                                    name="precio" 
                                    className="w-full mt-3 p-3 border rounded-xl bg-white"
                                    value={precio}
                                    onChange={onChange}/>
                            </div>
                            <div>
                                <label className="uppercase text-zinc-700  text-xl font-bold"> Image </label>
                                    <input 
                                    type="text"
                                    id="imagen"
                                    name="imagen" 
                                    className="w-full mt-3 p-3 border rounded-xl bg-white"
                                    value={imagen}
                                    onChange={onChange}/>
                            </div>

                                <button
                                    type="submit"
                                    value="Create"
                                    className="bg-red-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-red-500 transition-colors my-7"
                                >Create</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default CrearProductos;