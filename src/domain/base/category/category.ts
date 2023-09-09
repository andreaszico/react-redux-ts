import { FormatDate } from "../date/time";
import { District } from "../misc/district";

export interface Category {
  id: number;
  name: string;
  description: string;
  price: number;
  status: string;
  type: string;
  parent_id: number;
  district: District;
  created_at: FormatDate;
  updated_at: FormatDate;
  address: string;
}
