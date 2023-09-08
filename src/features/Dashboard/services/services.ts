import {api} from "../../../api/api";
import { endpoint } from "../../../api/endpoints";

class RootServices {
    get() {
        return api.get(endpoint.root)
    }
}


export const rootServices = new RootServices();