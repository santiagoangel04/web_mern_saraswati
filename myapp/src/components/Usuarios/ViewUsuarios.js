import React, { useEffect, useState } from "react";
import crud from "../../conections/crud";
import Header from "../Header";
import SideBar from "../Sidebar";

const ViewUsuarios = () => {

    const [usuario, setUsuario ] = useState([]);

    const getUsuarios = async () => {
        const response = await crud.GET(`/api/users`);
        setUsuario(response.user);
    }

    useEffect(() => {
        getUsuarios();
    }, [])

    return(
        <>
         <Header/>
            <div className="md:flex md:min-h-screen ">
                <SideBar/>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg flex-1">
                        <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                            <h1>
                            Users Contact
                            </h1>
                        </div>
                        <br></br>
                        <form>
                        <table className="table table-bordered rounded-md w-full text-md  ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th style={{width:'50%'}} scope="col" class="py-3 px-6">Name</th>
                                    <th style={{width:'50%'}} scope="col" class="py-3 px-6">Email</th>
                                </tr>
                            </thead>
                            <tbody className="bg-sky-200 border-b">
                                {usuario.map(item => (
                                    <tr>
                                        <td scope="row" className="py-4 px-6 font-medium text-gray-900 text-center whitespace-nowrap dark:text-green-600">{item.nombre}</td>
                                        <td scope="row" className="py-4 px-6 font-medium text-gray-900 text-center whitespace-nowrap dark:text-green-900">{item.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </form>
                </div>
            </div>
        </>
    )
}

export default ViewUsuarios;