import { PaginationModel } from "./pagination.model";
import { User } from "./student.model";

export interface UsersDataResponse{
  data : User[];
  meta: {
    pagination : PaginationModel
  }
}