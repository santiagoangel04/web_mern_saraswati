import { useEffect, useState } from "react";
import crud from "../../conections/crud";
import Header from "../Header";

import SideBar from "../Sidebar";


const ListarProductos = () => {

    //traer productos
    const [product, setProduct] = useState([]);
    const cargarProductos = async () => {
        const response = await crud.GET(`/api/products`);
        console.log(response.product)
        setProduct(response.product);
    }

    //traer nombre categoria
    const [categorias, setCategorias] = useState([]);

    const cargarCat = async () => {
        const response = await await crud.GET(`/api/categories`);
        setCategorias(response.category);
        console.log(response.category);
    }

    const categorias_id = [];
    const categoriasNombre = [];

    categorias.map(item => (categorias_id.push(item._id)));
    categorias.map(item => (categoriasNombre.push(item.nombre)));
    
    console.log(categorias_id);
    console.log(categoriasNombre);

    function nameCategory (id) {
        for (var i = 0;i < categorias_id.length; i++){
            if (categorias_id[i] === id){
                return categoriasNombre[i]
            }
        }
    }

    useEffect(() => {
        cargarProductos();
        cargarCat();
    },[]);



    return (
        <>
         <Header/>
            <div className=" md:flex md:min-h-screen">
                <SideBar/>
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg flex-1">
                        <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                            <h1>
                            Product List 
                            </h1>
                        </div>
                        <br></br>
                        <form>
                        <table className="table table-bordered rounded-md w-full text-md  ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th style={{width:'5%'}} scope="col" class="py-3 px-6">Image</th>
                                    <th style={{width:'17%'}} scope="col" class="py-3 px-6">Product id</th>
                                    <th style={{width:'5%'}} scope="col" class="py-3 px-6">Product Name</th>
                                    <th style={{width:'25%'}} scope="col" class="py-3 px-6">Description</th>
                                    <th style={{width:'15%'}} scope="col" class="py-3 px-6">Stock</th>
                                    <th style={{width:'9%'}} scope="col" class="py-3 px-6">Price</th>
                                    <th style={{width:'10%'}} scope="col" class="py-3 px-6">Name Category</th>
                                </tr>
                            </thead>
                            <tbody className="bg-sky-200 border-b ">
                                {product.map(item => (
                                   <tr >
                                   <td><img src={item.imagen} width="100" heigth="100"/></td>
                                   <td className="text-center">{item._id}</td>
                                   <td scope="row" class="py-2 px- text-center font-medium text-gray-900 whitespace-nowrap dark:text-black">{item.nombre}</td>
                                   <td className="text-center">{item.descripcion}</td>
                                   <td className="text-center">{item.stock}</td>
                                   <td className="text-center">{item.precio}</td>
                                   <td className="text-center">{nameCategory(item.categoryId)}</td>
                                   <td>
                                      
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
};

export default ListarProductos;