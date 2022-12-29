import React, { useEffect, useState } from "react";
import crud from "../../conections/crud";
import Header from "../Header";
import SideBar from "../Sidebar";

const SearchProductos = () => {
    
    const [productos, setProductos] = useState([]);

    const getAllProductos = async () =>  {
        const response = await crud.GET(`/api/products/`);
        console.log(response.product);
        setProductos(response.product);
    }

    useEffect(() => {   
        getAllProductos();
    }, [])

    return(
        <>
          <Header/>
            <div className="md:flex md:min-h-screen">
                <SideBar/>
                <form>
                    
                </form>
            </div>
        </>
    )


}

export default SearchProductos;