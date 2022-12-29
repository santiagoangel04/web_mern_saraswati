import React from "react"
import { useNavigate } from "react-router-dom";

// crear put, delete, de productos y mejorar el front  


//remember to use tailwind for html 
const SideBar = () => {
    // log out function removes the token and uses navigate to get to the login page  
    const navigate = useNavigate();

    const LogOut = () => {
        localStorage.removeItem("token"); // use the log out function in sidebar 
        navigate('/')
    } 

    return(
        <aside className=" lg:w-80 rounded bg-sky-100" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 rounded bg-sky-100">
                <ul className='space-y-2'>
                    <li>
                        <h1 className="font-bold text-stone-900"> Admin Panel </h1>
                        <br></br>
                    </li>

                    <li>
                        <a href="/admin" class="flex items-center p-2 text-base font-bold  text-stone-900 rounded-lg dark:text-cyan-700 hover:bg-red-500 dark:hover:bg-red-500">
                            <svg aria-hidden="true" class="w-6 h-6  transition duration-75 text-stone-900  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span class="ml-3">Dashboard</span>
                        </a>
                    </li>
                    
                    <li>
                        <a href='/crearCategoria' class="flex items-center p-2 text-base font-bold text-stone-900 rounded-lg dark:text-cyan-700 hover:bg-red-500 dark:hover:bg-red-500">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-stone-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="ml-3"> Create Category </span>
                        </a>
                    </li>

                    <li>
                        <a href='/listaCategorias' class="flex items-center p-2 text-base font-bold text-stone-900 rounded-lg dark:text-cyan-700 hover:bg-red-500 dark:hover:bg-red-500">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-stone-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                            <span className="ml-3"> Category list </span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/listaProductos" className="flex items-center p-2 text-base font-bold text-stone-900 rounded-lg dark:text-cyan-700 hover:bg-red-500 dark:hover:bg-red-500" >
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-stone-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                            <span className="ml-3 whitespace-nowrap"> Products </span>
                        </a>
                    </li>
                    <li>
                        <a href="/usuarios" className="flex items-center p-2 text-base font-bold text-stone-900 rounded-lg dark:text-cyan-700 hover:bg-red-500 dark:hover:bg-red-500">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-stone-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span className="ml-3 whitespace-nowrap"> Users Contact </span>
                        </a>
                    </li>
                </ul>
                <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <a className="flex items-center p-2 text-base font-bold text-stone-900 rounded-lg bg-red-500">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-stone-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                            <button onClick={LogOut}> Log Out</button>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar;