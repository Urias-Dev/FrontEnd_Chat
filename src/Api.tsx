import axios from "axios";
import {LoginData, Message, RegisterData} from "./interfaces";


const API = axios.create({baseURL: 'http://localhost:3000'})


export const createUser = (formData: any) => {
    console.log(formData)
     return API.post('/user-create', formData);

 }



   export    const findUser  = ()   => {

       return  API.get( '/find_user '  )



            {/*.then( response =>   {


              console. log  ( response.data.data)

            for (let i = 0; i < response.data.data.length; i++) {
               let objeto = response.data.data[i] ;
                console.log(objeto.nombre);




             }



             return response.data.data


         })

      */}
 }


         export    const    findMessages =         ( ) =>  {



           return  API.get (  '/find_message'       )


 }



          export    const login    =  (  data:  LoginData    )=>     {
                   return API. post (   '/login'  , data    )
          }



       export  const  finUserById    =  ( id:   string   )   =>          {
          return   API.get   (         '/findone_user/'      +  id    )

   }


    export    const   updateUser  = ( user_id: string , data: RegisterData   ) => {
             return   API.put  ('/update_user/'+   user_id , data      )
       }

         export   const  sendMessagess  =  (messages :   Message       )      =>     {
           return  API.post  (   '/create_messages'     ,  messages     )
         }