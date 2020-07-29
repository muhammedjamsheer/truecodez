export class User {
    id:number;
    name:string;
    email:string;
    mobile:number;
    state:number;
    gender:string;
    languages:Language[];
    acceptTerms:boolean;
}

export class State {
    id:number
    name:string
}
export class Language {
    id:number
    name:string
}


