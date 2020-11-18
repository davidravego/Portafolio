import React, { Component } from 'react'
//import {Navbar, Nav} from 'react-bootstrap'

class detallesRave extends Component {
    render(){
        return(
            <div className="container mt-5">
                <h1 className="tituloDetalles"><b>Un poco sobre mí.</b></h1>
                <div className="contenedorDetalles">
                    <div className="mt-5 d-flex align-items-center contenedorDetalles">
                        <a href="https://github.com/davidravego"><img class="logos" src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="detalles"/></a>
                        <p class="descripcionDetalles pl-4">
                            Mi GitHub, con el cual contribuyo al desarrollo del proyecto.
                        </p>
                    </div>
                    <div className="mt-5 d-flex align-items-center contenedorDetalles">
                        <a href="http://inemjose.edu.co/"><img class="logos" src="https://fotos.subefotos.com/d4ddc289982d02ea328917cd934ec421o.png" alt="detalles"/></a>
                        <p class="descripcionDetalles pl-4">
                            Proximamente seré graduado del INEM José Félix de Restrepo
                        </p>
                    </div>
                    <div className="mt-5 d-flex align-items-center contenedorDetalles">
                        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx"><img class="logos" src="https://fotos.subefotos.com/fe77cd2fd01f3fc0779bab4ce125ab8eo.png" alt="detalles"/></a>
                        <p class="descripcionDetalles pl-4">
                            Obtendré un titulo de media-tecnica en programación y mi siguiente paso es estudiar en el SENA
                        </p>
                    </div>
                    <div className="mt-5 d-flex align-items-center contenedorDetalles">
                     <a href=" https://wa.link/9bvn1r   "><img class="logos" src="https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png" alt="detalles"/></a>
                        <p class="descripcionDetalles pl-4">
                            Esté es mi contacto, por si te interesa conocerme de forma más detallada.
                        </p>
                    </div>
                </div>
            </div>
        );
    }   
}

export default detallesRave;