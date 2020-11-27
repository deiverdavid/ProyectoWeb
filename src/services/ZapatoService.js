import { AxiosInstance } from "../config/axios-config"

class ZapatoService{

    get(){
        return AxiosInstance.get("zapato");
    }

    delete(id){
        return AxiosInstance.delete(`zapato/${id}`);
    }

    create(shoe){
        return AxiosInstance.post('zapato',shoe);
    }

    update(id,shoe){
        return AxiosInstance.put(`zapato/${id}`,shoe);
    }
}

export default new ZapatoService();