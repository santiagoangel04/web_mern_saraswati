import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import crud from "../../conections/crud";
import Header from "../Header";
import SideBar from "../Sidebar";
import swal from "sweetalert";

const ActualizarProducto = () => {

    const navigate = useNavigate();

    const {idProducto} = useParams()// recoger id producto para hook useState 

    const [producto, setProducto] = useState({  //crear el obeto json de producto para obtener los campos deseados 
        nombre:'',
        descripcion:'',
        stock:'',
        precio:'',
        imagen:''
    });
    // realizar un get de producto para llenar los espacios de la actualizacion 
   const cargarProducto = async () => {
        const response = await crud.GET(`/api/products/create/${idProducto}`);
        console.log(response);
        setProducto(response.product);
   };     
   //usar use effect para que se carguen los datos al entrar a la pagina 
   useEffect(() => {
    cargarProducto();
   },[]); 
   console.log(producto); //visualizar el pricuvto actual en la consola 

    const {nombre, descripcion, stock, precio, imagen} = producto; // crear el objeto json para enviar  

    const onChange = (event) => {   //onchange para recoger los datos de las cajas 
        setProducto({
            ...producto,
                [event.target.name]:event.target.value
        });  //recordar no usar variable producto como una funcion sino como un objeto json 
    };

    const actualizarProd = async () => {
        const data = {
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            stock: producto.stock,
            precio: producto.precio,
            imagen: producto.imagen
        }

        const response = await crud.PUT(`/api/products/${idProducto}`, data);
        console.log(response)
        var mensaje = "Product updated"
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
         navigate(-1); //navega a la pagina anterior  
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        actualizarProd();
    }

   return(
    <>
            <Header/>
            <div className="md:flex md:min-h-screen">
                <SideBar/>
                <main className="flex-1">
                    <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                        <h1>
                        Update Product
                        </h1>
                    </div>
                    <div>
                        <form
                         onSubmit={onSubmit}
                         className="my-10 bg-sky-200 shadow rounded-md p-10"
                         >
                         <div className="my-5">
                             <label className="uppercase text-zinc-700  text-xl font-bold"> Product Name </label>
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
                         <label className="uppercase text-zinc-700  text-xl font-bold"> Description </label>
                         <input 
                             type="text"
                             id="descripcion"
                             name="descripcion"
                             value={descripcion}
                             onChange={onChange}
                             placeholder= "descripcion"
                             className="w-full  mt-3 p-3 border rounded-xl bg-white"
                         />
                         </div>

                         <div>
                         <label className="uppercase text-zinc-700  text-xl font-bold"> Stock  </label>
                         <input 
                             type="number"
                             id="stock"
                             name="stock"
                             value={stock}
                             onChange={onChange}
                             placeholder= "stock"
                             className="w-full  mt-3 p-3 border rounded-xl bg-white"
                         />
                         </div>

                         <div>
                         <label className="uppercase text-zinc-700  text-xl font-bold"> Price  </label>
                         <input 
                             type="number"
                             id="precio"
                             name="precio"
                             value={precio}
                             onChange={onChange}
                             placeholder= "precio"
                             className="w-full  mt-3 p-3 border rounded-xl bg-white"
                         />
                         </div>

                         <div>
                         <label className="uppercase text-zinc-700  text-xl font-bold"> Image </label>
                         <input 
                             type="text"
                             id="imagen"
                             name="imagen"
                             value={imagen}
                             onChange={onChange}
                             placeholder= "imagen"
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

export default ActualizarProducto;