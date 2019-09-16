import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/navegacion.css'

const Navegacion = () => {
    return (
        <nav className="col-12 com-md-8">
            <Link to= {'/'}>Todos los Posts</Link>
            <Link to= {'/crear'}>Nuevo Post</Link>
        </nav>
    );
}

export default Navegacion;