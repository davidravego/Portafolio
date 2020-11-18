import React, { Component } from 'react'
import ImagenRave from '../componentes/imagenRave'
import DescripcionRave from '../componentes/descripcionRave'
import DetallesRave from '../componentes/detallesRave.js'
import CampeonesFavoritos from '../componentes/cameponesFavoritos'
import './principal.css';
//import {Navbar, Nav} from 'react-bootstrap'

class Principal extends Component {
    render(){
        return(
            <div className="pb-5">
                <ImagenRave />
                <DescripcionRave />
                <DetallesRave />
                <CampeonesFavoritos/>
            </div>
        );
    }   
}

export default Principal;