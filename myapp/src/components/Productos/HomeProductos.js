import React, { useEffect, useState } from "react";
import Header from "../Header";
import SideBar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import crud from "../../conections/crud";
import ViewProductos from "./ViewProductos";

export const HomeProductos = () => {

    const navigate = useNavigate();

    const { idCategoria } = useParams();
    
    const [productos, setProductos] = useState([]);
    
    const cargarProductos = async () => {

        const response = await crud.GET(`/api/products/${idCategoria}`);
        setProductos(response);

    };

    console.log(productos);

    useEffect(() => {
        cargarProductos();
    },[])

    return(
        <>
        <Header/>
            <div className=" md:flex md:min-h-screen">
            
                <SideBar/>    
                
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg flex-1">
                        <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                            <h1>
                            Products List
                            </h1>
                        </div>
                        <div className="p-10">
                        <Link 
                            to={`/crearProductos/${idCategoria}`}
                            className= "bg-green-700  mb-5 w-full py-3 text-white uppercase font-bold rounded text-xl"> 
                                Create Product
                            </Link>
                        </div>
                        <div className="bg-sky-200 shadow mt-10 rounded">
                            {productos.map( producto => 
                                <ViewProductos
                                    key={producto._id}
                                    producto = {producto} />
                                ) }
                        </div>
                    </div>
                
            </div>    
        </>
    );
}

export default HomeProductos;