 export  interface LoginData  {
    correo : string  ,
    pass: string
}


  export    interface  Message {
     body: string;
     from: string;
     fecha: string;
 }


     export   interface  RegisterData   {
      user_id?:  string     ,
      nombre?:  string ,
      apellido_p?: string  ,
      apellido_m?: string,
      pass?:  string   ,
      correo?:    string  ,
      foto? :   string
   }




 export interface  getId  {
     user_id  : string
 }