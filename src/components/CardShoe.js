
import React, { useState,handleOpenModal } from "react";
import { Card, Button } from 'react-bootstrap';
import UpdateShoeModal from './UpdateShoeModal';

function CardShoe(props) {
    const { id } = props;
    const [show, setShow]=useState(false);

    const handleClose = () =>{
        setShow(false)
    }

    const handleOpenModal = () => {
        setShow(true)
    }

    const handleUpdateShoe = () => {
        setShow(true)
    }
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{props.id}</Card.Title>
                <Card.Text>
                    {props.marca}
                </Card.Text>
                <Card.Text>
                    {props.color}
                </Card.Text>
                <Card.Text>
                    {props.talla}
                </Card.Text>
                <Card.Text>
                    {props.garantia}
                </Card.Text>
                <Card.Text>
                    {props.valor}
                </Card.Text>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text>
                    {props.rating}
                </Card.Text>
                <Card.Text>
                    {props.descuento}
                </Card.Text>
                <Card.Text>
                    {props.genderId}
                </Card.Text>
                <Card.Text>
                    {props.cantidad}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">

                <Button className="boton-izq"
                    variant="danger"
                    onClick={() => props.handleDeleteShoe(id)}>Eliminar</Button>

                <Button className="boton-der" onClick={handleOpenModal}  variant="success" >Actualizar</Button>
               {
                    show &&
                <UpdateShoeModal
                    show={show}
                    handleClose={handleClose} 
                    handleUpdateShoe={handleUpdateShoe} />
               } 
            </Card.Footer>
        </Card>

    );
}

export default CardShoe;