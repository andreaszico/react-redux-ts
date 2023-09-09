import { Category } from "../category/category";
import { District } from "../misc/district";

export interface User {
    id:                number;
    uuid:              string;
    name:              string;
    email:             null;
    username:          string;
    nik:               string;
    gender:            string;
    address:           string;
    phoneNumber:       string;
    email_verified_at: null;
    sub_district_id:   number;
    district_id:       number;
    district:          District;
    sub_district:      District;
    role_id:           number;
    account_status:    number;
    created_at:        Date;
    updated_at:        Date;
    role:              District;
    category:          Category[];
}