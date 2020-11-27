import { logDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import GenderService from '../services/GenderService';

function CreateShoeModal(props) {
    //props
    const { show, handleClose } = props;
    // estados

    const [genders, setGenders] = useState(null);
    const [id, setId] = useState(null);
    const [marca, setMarca] = useState(null);
    const [color, setColor] = useState(null);
    const [talla, setTalla] = useState(null);
    const [garantia, setGarantia] = useState(null);
    const [valor, setValor] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [rating, setRating] = useState(null);
    const [descuento, setDescuento] = useState(null);
    const [genderId, setGenderId] = useState(null);
    const [cantidad, setCantidad] = useState(null);

    useEffect(() => {
        GenderService.get().then(resp => {
            setGenders(resp.data);
            console.log(resp.data);
        }, (error) => {
            console.log(error);
        });
    }, []);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value);

        switch (name) {
            case "id":
                setId(value ? value : null);
                break;
            case "marca":
                setMarca(value ? value : null);
                break;
            case "color":
                setColor(value ? value : null);
                break;
            case "talla":
                setTalla(value ? value : null);
                break;
            case "garantia":
                setGarantia(value ? value : null);
                break;
            case "valor":
                setValor(value ? value : null);
                break;
            case "descripcion":
                setDescripcion(value ? value : null);
                break;
            case "rating":
                setRating(value ? value : null);
                break;
            case "descuento":
                setDescuento(value ? value : null);
                break;
            case "genderId":
                if (value) {
                    setGenderId(value);
                } else {
                    setGenderId(null);
                }
                break;
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
                        <FormLabel>Marca </FormLabel>
                        <FormControl
                            name="marca"
                            onChange={handleOnChange}
                            value={marca ? marca : ""} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Color </FormLabel>
                        <FormControl
                            name="color"
                            onChange={handleOnChange}
                            value={color ? color : ""} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Talla </FormLabel>
                        <FormControl
                            name="talla"
                            onChange={handleOnChange}
                            value={talla ? talla : ""} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Garantia</FormLabel>
                        <FormControl
                            name="garantia"
                            onChange={handleOnChange}
                            value={garantia ? garantia : ""}  />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Valor</FormLabel>
                        <FormControl
                            name="valor"
                            onChange={handleOnChange}
                            value={valor ? valor : ""} />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Descripción</FormLabel>
                        <FormControl
                            name="descripcion"
                            onChange={handleOnChange}
                            value={descripcion ? descripcion : ""} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Rating</FormLabel>
                        <FormControl
                            name="rating"
                            onChange={handleOnChange}
                            value={rating ? rating : ""} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Descuento</FormLabel>
                        <FormControl
                            name="descuento"
                            onChange={handleOnChange}
                            value={descuento ? descuento : ""} />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Género</FormLabel>
                        <FormControl
                            name="genderId"
                            onChange={handleOnChange}
                            value={genderId ? genderId : ""}
                            as="select">
                            <option value="">--SELECCIONE--</option>
                            {
                                genders
                                && genders.length > 0
                                && genders.map((gender, index) => {
                                    return <option value={gender.id}>{gender.nombre}</option>
                                })
                            }
                        </FormControl>
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
                    onClick={() => props.handleSaveShoe({
                        id,
                        marca,
                        color,
                        talla,
                        garantia,
                        valor,
                        descripcion,
                        rating,
                        descuento,
                        genderId: {
                            id: genderId 
                        },
                        cantidad
                    })}
                    disabled={!id || !marca || !color || !talla
                        || !garantia || !valor || !descripcion || !rating || !descuento || !genderId || !cantidad}>
                    Guardar
      </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateShoeModal;