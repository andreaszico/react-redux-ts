import axios from "axios";
import { env } from "../shared/config/configs";

export const api = axios.create({
    baseURL: env.BASE_API,
    headers: {"Content-Type": "application/json"},
});