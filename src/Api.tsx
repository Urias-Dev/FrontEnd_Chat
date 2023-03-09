import axios from "axios";
import {LoginData , Message, RegisterData} from "./interfaces";


const API = axios .create({baseURL: 'http://192.168.1.108:3000' }     )


export   const createUser =  async  ( formData:  RegisterData ) => {
       const  query =  await  API.post('/user-create', formData );

        return    query

 }



        export     const     findUser    =      async    (       )     => {

          const query   =     await   API.get(   '/find_all'         )
            return query.data.data  ;






 }


         export    const     findMessages =         ( ) =>  {



           return  API.get (  '/find_message'         )


 }



          export     const login     =   (  data:  LoginData    )=>      {
                    return API. post  (   '/login'  ,  data     )
          }



       export  const  finUserById    =  ( id:   string   )   =>          {
          return   API.get   (         '/findone_user/'      +   id     )

   }


    export    const   updateUser  = ( user_id: string , data: RegisterData   ) => {
             return   API.put  ('/update_user/'+   user_id , data      )
       }

         export   const  sendMessagess  =  (messages :   Message       )      =>     {
           return  API.post  (   '/create_messages'        ,  messages     )
         }