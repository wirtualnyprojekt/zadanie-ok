import { app } from "./axiosConfig";
import { FormDataPost, DepartmentsDataResponse } from "../Types/form";

export const getDepartments = async () => {
    return new Promise<DepartmentsDataResponse>((resolve, reject) => {
        app
        .get("/departments.json")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
}; 

export const postForm = async ( data: FormDataPost ) => {
    return new Promise((resolve, reject) => {
      app
        .post(`/users.json`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error: string) => {
          reject(error);
        });
    });
}; 