import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./Sidebar";
import crud from "../conections/crud";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const Admin = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate("/login");
            } 
        }
        autenticarUsuario();
        cargarCat();
        
    },[]); // [] se ejecuta solo una vez, cuando se ingresa // se puede usar use effect solo una vez con las funciones necesarias 


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

    const [numProducts, setNumProducts] = useState([]);

    const getProducts = async (e) => {
        e.preventDefault();
        const datas = [];
        for(var i = 0; i < categorias_id.length; i++ ) {
            var response = await crud.GET(`/api/products/${categorias_id[i]}`);
            datas.push(response.length);
        }
        console.log(datas);
        setNumProducts(datas);
    }     
    
    const data = []

    for (var j = 0; j < categoriasNombre.length; j++) {
        data.push({
            name:categoriasNombre[j],
            products:numProducts[j]
        })
    } 

    console.log(data)

    return (
        <>
            <Header/>
            <div className="md:flex md:min-h-screen bg-sky-200">
                <SideBar/>
                <div>
                <div  className="mt-10 flex justify-center bg-gradient-to-r text-stone-700 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                    <h1>
                        Admin Dashboard
                    </h1>
                </div>
                <input
                    type="submit"
                    value="SHOW CHART"
                    className="bg-red-500 mb-5 w-full py-3 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={(e) => getProducts(e)}
                    ></input>

                <BarChart
                    width={700}
                    height={600}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="products" fill="#196e19" />
        </BarChart>
        </div>
            </div> 
        </>
    )
};

export default Admin;