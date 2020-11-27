import React, { useState, useEffect } from "react";
import ShoeService from "../services/ZapatoService";
import { Container, CardDeck } from 'react-bootstrap';
import CardShoe from '../components/CardShoe';
import Swal from 'sweetalert2';

const HomeView = () => {
    const [shoes, setShoes] = useState(null);

    useEffect(() => {
        handleGetShoes();
    }, []);

    const handleGetShoes = async () => {
        try {
            Swal.fire({
                allowOutsideClick:false,
                icon:'info',
                text: 'Espere por favor :)'
            });

            Swal.showLoading();
           

            const resp = await ShoeService.get();
            console.log(resp);
            console.log(resp.data);
            setShoes(resp.data);

            Swal.close();
        } catch (error) {
            Swal.close();
            console.log(error);
        }
    }

    const handleDeleteShoe = (id) => {
        ShoeService.delete(id).then(resp => {
            console.log(resp);
            handleGetShoes();
        }, (err) => {
            console.log('error al eliminar', err)
        });
    }

    const handleUpdateShoe = (id,shoe) => {
        ShoeService.put(id,shoe).then(resp => {
            console.log(resp);
            handleGetShoes();
        }, (err) => {
            console.log('error al actualizar', err)
        });
    }

    

    function handleRenderShoes() {
        if (!shoes || shoes.length === 0) {
            return <div>No exiten datos</div>;
        }

        const columns = 4;
        let rows = Math.floor(shoes.length / columns);
        console.log('numero de filas incial', rows);
        const resto = shoes.length % columns;
        console.log('operacion mod', resto);
        if (resto !== 0) {
            rows = rows + 1;
        }
        console.log('numero de filas', rows);

        const arrayRows = [...Array(rows)];

        console.log(arrayRows);

        return arrayRows.map((row, index) => {
            return (
                <CardDeck key={index}>
                    {shoes.slice(
                        index === 0 ? index : index * columns,
                        index === 0 ? columns : index * columns + columns
                    ).map((shoe, index) => {
                        return <CardShoe key={index}
                            id={shoe.id}
                            marca={shoe.marca}
                            color={shoe.color}
                            talla={shoe.talla}
                            garantia={shoe.garantia}
                            valor={shoe.valor}
                            descripcion={shoe.descripcion}
                            rating={shoe.rating}
                            descuento={shoe.descuento}
                            cantidad={shoe.cantidad}
                            handleDeleteShoe={handleDeleteShoe} />;

                    })}
                </CardDeck>
            );

        });

    }

    return (
        <Container>
            {handleRenderShoes()}
        </Container>
    );
}

export default HomeView;