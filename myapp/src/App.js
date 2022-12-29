import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ActualizarCategoria from '../src/components/Categorias/ActualizarCategoria'
import Admin from './components/Admin';
import CrearCategoria from './components/CrearCategoria';
import CrearCuenta from './components/CrearCuenta';
import Home from './components/Home';
import ListaCategoria from './components/ListaCategoria';
import Login from './components/Login';
import HomeProductos from './components/Productos/HomeProductos';
import CrearProductos from './components/Productos/CrearProductos';
import ActualizarProducto from './components/Productos/ActualizarProductos';
import ViewUsuarios from './components/Usuarios/ViewUsuarios';
import SearchProductos from './components/Productos/SearchProductos';
import ListarProductos from './components/Productos/ListarProductos';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element = {<Home/>}/>   
        <Route path='/Login' exact element= {<Login/>}/>
        <Route path='/crear-cuenta' exact element= {<CrearCuenta />}/>
        <Route path='/admin' exact element={<Admin/>}></Route>
        <Route path='/crearCategoria' exact element={<CrearCategoria/>}/>
        <Route path='/listaCategorias' exact element={<ListaCategoria/>}/>
        <Route path='/updateCategoria/:idCategoria' exact element={<ActualizarCategoria/>}/>
        <Route path='/homeProductos/:idCategoria' exact element={<HomeProductos/>}/>
        <Route path='/crearProductos/:idCategoria' exact element={<CrearProductos/>}></Route>
        <Route path='/updateProducto/:idProducto' exact element={<ActualizarProducto/>}></Route>
        <Route path='/usuarios' exact element={<ViewUsuarios/>}></Route>
        <Route path='/listaProductos' exact element={<ListarProductos/>}></Route>
        <Route path='/searchProductos' exact element={<SearchProductos/>}></Route>
      </Routes>
    </Router>
  );
}

// path creates the path to be refferenced in th browserm and the exact element is the function of the linked file
export default App;