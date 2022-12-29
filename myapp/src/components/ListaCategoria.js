import Header from "./Header";
import SideBar from "./Sidebar";
import crud from '../conections/crud';
import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const ListaCategoria = () => {
    const navigate = useNavigate();

    const [categoria1, setCategorias] = useState([]);

    const cargarCategorias = async () => {
        const response = await crud.GET(`/api/categories`);
        console.log(response.category)
        setCategorias(response.category);
    }
    
    useEffect(() => {
        cargarCategorias();
    }, []);

    const borrarCategoria =  (e, idCategoria, nombre) => {
        e.preventDefault();
        swal({
            title: "Confirm Delete category " + nombre + " ?",
            text: "Once deleted there's no backup",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(willDelete => {
            if (willDelete) {
                e.preventDefault();
                crud.DELETE(`/api/categories/${idCategoria}`);
                window.location.reload();
            }
        });
    }

    const editCategory = (e, idCategoria, nombre) => {
        e.preventDefault();
        swal({
            title: "Confirm update " + nombre + " ?",
            text: "Once updated there's no backup",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(willDelete => {
            if(willDelete) {
                navigate(`/updateCategoria/${idCategoria}`)
            }
        })
       
    }

    const crearProductos = async (e, idCategoria) => { 
        e.preventDefault();   
        navigate(`/homeProductos/${idCategoria}`);
        
    }

    return (
        <>
         <Header/>
            <div className=" md:flex md:min-h-screen">
                <SideBar/>
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg flex-1">
                        <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                            <h1>
                            Category List 
                            </h1>
                        </div>
                        <br></br>
                        <form>
                        <table className="table table-bordered rounded-md w-full text-md  ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th style={{width:'15%'}} scope="col" class="py-3 px-6">Image</th>
                                    <th style={{width:'20%'}} scope="col" class="py-3 px-6">Category id</th>
                                    <th style={{width:'15%'}} scope="col" class="py-3 px-6">Category Name</th>
                                    <th style={{width:'25%'}} scope="col" class="py-3 px-6">Created</th>
                                    <th style={{width:'25%'}} scope="col" class="py-3 px-6">Creator</th>
                                    <th style={{width:'15%'}} scope="col" class="py-3 px-6">Actions</th>
                                    <th style={{width:'10%'}} scope="col" class="py-3 px-6">Create</th>
                                </tr>
                            </thead>
                            <tbody className="bg-sky-200 border-b ">
                                {categoria1.map(item => (
                                   <tr >
                                   <td><img src={item.imagen} width="100" heigth="100"/></td>
                                   <td className="text-center">{item._id}</td>
                                   <td scope="row" class="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap dark:text-black">{item.nombre}</td>
                                   <td className="text-center">{item.creado}</td>
                                   <td className="text-center">{item.creador}</td>
                                   <td>
                                      <input
                                        type="submit"
                                        value="Edit"
                                        className="bg-slate-500 mb-5 w-full py-3 text-white uppercase font-bold text-sm rounded-lg"
                                        onClick={(e) => editCategory(e, item._id, item.nombre) }
                                      ></input>
                
                                      <input
                                        type="submit"
                                        value="Delete"
                                        className="bg-red-500 mb-5 w-full py-3 text-white uppercase font-bold text-sm rounded-lg"
                                        onClick={(e) => borrarCategoria(e, item._id, item.nombre)}
                                      ></input>
                                   </td>
                                   <td>
                                   <input
                                        type="submit"
                                        value="Create Product"
                                        className="bg-green-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                                        onClick={(e) => crearProductos(e, item._id)}
                                      ></input>
                                   </td>
                               </tr> 
                                ))}
                            </tbody>
                        </table>
                        </form>
                    </div>
            </div>
        </>
    );
}

export default ListaCategoria;