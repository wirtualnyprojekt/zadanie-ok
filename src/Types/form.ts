export type DepartmentsDataResponse = {
    id: number; 
    name: string; 
};

export type FormDataPost = {
    fullName: string | null;
    birthDate: string | null;
    email: string | null;
    department: number | null;
    termsOfUse: boolean | null; 
};
