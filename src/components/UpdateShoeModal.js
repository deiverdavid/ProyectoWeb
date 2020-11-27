import { logDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import ShoeService from "../services/ZapatoService";



function UpdateShoeModal(props) {
    //props
    const { show, handleClose } = props;
    // estados
    const {id}=props;
    const [cantidad, setCantidad] = useState(null);


    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value);

        switch (name) {
            /*case "id":
                setId(value ? value : null);
                break;*/

            case "cantidad":
                setCantidad(value ? value : null);
                break;
            default:
                break;
        }


    }

    return (
        <Modal backdrop="static" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo Zapato</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup>
                        <FormLabel>Id del zapato</FormLabel>
                        <FormControl
                            name="id"
                            onChange={(e) => handleOnChange(e)}
                            value={id ? id : ""} />
                    </FormGroup>


                    <FormGroup>
                        <FormLabel>Cantidad </FormLabel>
                        <FormControl
                            name="cantidad"
                            onChange={handleOnChange}
                            value={cantidad ? cantidad : ""} />
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
      </Button>
                <Button
                    variant="primary"
                   /* onClick=*/ /* {(
                        ShoeService.put(id).then(resp => {
                        console.log(resp);
                       
                    }, (err) => {
                        console.log('error al actualizar', err)
                    })
                    )}*/
                    
                   /* {() => props.handleUpdateShoe(id)}*/
                    onClick={() => props.handleUpdateShoe ( id, {
                       
                        cantidad
                    })}
                    disabled={ !cantidad}>
                    Guardar

       
   
      </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateShoeModal;

