import React, { Component } from 'react';
import data from "../data/rave.json";
import {Card, Button} from "react-bootstrap";

class campeonesFavoritos extends Component {
    state={
        data: data
    };

    render(){
        return(
            <div className="contenedorDescripcion container">
                <h1 className="mt-5 tituloDetalles"><b>Mis hobbies, campeones favoritos</b></h1>
                {this.state.data.map((dato) => 
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dato.foto_campeon} />
                <Card.Body>
                    <Card.Title>{dato.nombre_campeon}</Card.Title>
                    <Card.Text>
                        Es un campeon de tipo: {dato.tipo_campeon}
                    </Card.Text>
                    <Button href={dato.mas_info} variant="primary">Más info.</Button>
                </Card.Body>
                </Card>
                )}
            </div>
        );
    }
}

export default campeonesFavoritos;
