import { AxiosInstance } from "../config/axios-config"

class GenderService{
    get(){
        return AxiosInstance.get("gender");
    }
}

export default new GenderService;