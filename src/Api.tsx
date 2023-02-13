import axios from "axios";


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


         export    const  findMessages =  ( ) => {

          return  API.get (  '/find_message'   ) .then    ( response => {
               console.log(response.data.data  )
          })


 }



          export    const login    =  ( data:  any  )=>     {
                   return API.post (  '/login'  , data    )
          }



       export  const finUserById   = ( id:  string   )   =>          {
          return   API.get  (       '/findone_user/'   +   id    )

  }