export interface Subject{
    id : string;
    name : string;
    description : string;
    lecturer : string;
    img : string;
}

export interface Notes{
    id : string;
    title : string;
    notes : string;
    delete : number;
}

export interface User{
    username : string;
    password : string;
    name : string;
    id : string;
}