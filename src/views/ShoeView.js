import React, { useState,handleOpenModal } from "react";
import { Button, Container } from "react-bootstrap";
import CreateShoeModal from '../components/CreateShoeModal';
import ZapatoService from '../services/ZapatoService';
import Swal from 'sweetalert2'

function ShoeView(){
    const [show, setShow]=useState(false);

    const handleClose = () =>{
        setShow(false)
    }

    const handleOpenModal = () => {
        setShow(true)
    }

    const handleSaveShoe = (shoe) => {
        Swal.fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Espere por favor :)'
        });

        Swal.showLoading();

        console.log(shoe);

    ZapatoService.create(shoe)
            .then((resp) => {
                Swal.close();
                console.log(resp);
                handleClose();
            }, (error) => {
                Swal.close();
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: 'Se presentó un error al registrar el zapato'
                });
            });
    }
    return (
        <Container>
           <Button className="boton-reg" onClick={handleOpenModal} variant="primary">Registrar Zapato</Button>
            {
                show &&
                <CreateShoeModal
                    show={show}
                    handleClose={handleClose} 
                    handleSaveShoe={handleSaveShoe} />
            } 
        </Container>
    );
}

export default ShoeView;