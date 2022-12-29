import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import crud from "../../conections/crud";

export const ViewProductos = ({producto}) => {
    const navigate  = useNavigate();
    const {_id, nombre, descripcion, stock, precio, imagen} = producto;
    const id = producto._id;

    const toActualizarProd = async (e, idProducto) => {
        e.preventDefault();
        swal({
            title: "Confirm update",
            text: "Once updated there's no backup",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(willDelete => {
            if(willDelete) {
                navigate(`/updateProducto/${idProducto}`);
            }
        })    
    }

    const deleteProducto = (e, id , nombre) => {
        e.preventDefault();
        swal({
            title: "Confirm Delete product " + nombre + " ?",
            text: "Once deleted there's no backup",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(willDelete => {
            if (willDelete) {
                e.preventDefault();
                crud.DELETE(`/api/products/${id}`);
                window.location.reload();
            }
        });
    }

    return(
        <>
        <div className="border-b p5 flex justify-between items-center">
            <div className="flex flex-col items-start">
                <p className="mb-1 text-xl text-stone-800">Id :  {_id}</p>
                <p className="mb-1 text-xl text-stone-800">Name :    {nombre}</p>
                <p className="mb-1 text-xl text-stone-800 uppercase">Description :   {descripcion}</p>
                <p className="mb-1 text-xl text-stone-800">Stock :   {stock}</p>
                <p className="mb-1 text-xl text-stone-800 uppercase" >Price :    {precio}</p>
                <img src={imagen} width="150" height="150"></img>
            </div>

            <div className='flex flex-col lg:flex-row gap-2'>
                    <button
                          className="bg-green-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                          //onClick={() => handleModalEditarTarea(tarea)}
                          onClick={(e) => toActualizarProd(e, id)}
                      >Edit</button>
                      
                    <button
                          className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                         // onClick={() => handleModalEliminarTarea(tarea)}
                         onClick={(e) => deleteProducto(e, id, nombre)}
                      >Delete</button>
            </div>
        </div>
        </>
    );
}

export default ViewProductos;