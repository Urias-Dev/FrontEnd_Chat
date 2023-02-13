import React, {useState} from 'react';
import {IonInput, IonItem, IonLabel} from "@ionic/react";
import {createUser} from "../Api";
import {useHistory} from "react-router-dom";
import {RegisterData} from "../interfaces";

 const RegisterForms: React.FC =  () => {



     const history = useHistory ();

      const [formData,   setFormData] = useState<RegisterData  > ( {
          user_id: '',
        nombre: '',
        apellido_p: '',
        apellido_m: '',
        pass: '',
        correo: '',
         foto:  ''
    }) ;

     const handleSubmit =   (event : any )  => {
         event.preventDefault();


           createUser(  formData )

             .then(response =>   {
                console.log(response.data);
             })
            .catch(error => {
                console.log(error);
            });

             history.push('/login')
    }



     const     datos = (nombre: string , Apellido_p: string, Apellido_m:  string, Pass: string , Correo:   string, Foto  : string  ) => {
          console.log(nombre, Apellido_p, Apellido_m, Pass, Correo, Foto    )
     }

      return (

        <div className='  w-11/12   max-w-[950px]  px-10  py-20 rounded-3xl bg-white  border-2 border-gray-100    max-sm:border-0'>
            <h1 className='text-5xl font-semibold  max-sm:text-4xl max-sm:font-normal  text-center' >  Register  </h1>
            <p className='font-medium  text-lg text-gray-500 mt-4   text-center '> Create a new account </p >

                <div className='mt-8'  >

                     <form  onSubmit={handleSubmit }   >
                 <div className=' flex flex-col ' >

                     <IonItem >




                         <IonLabel position={"floating"   }  className={"max-sm:text-center  "}> Name </IonLabel>
                            <IonInput type="text"   clearInput={ true  }    maxlength={25 } value=   {formData.nombre }      onIonChange ={(event) => setFormData({...formData,  nombre: event.detail.value != undefined ? event.detail.value : ""})} > </IonInput>
                      </IonItem>
                  </div>



                 <div className='flex flex-col mt-4'    >

                         <IonItem >

                         <IonLabel  position={"floating"  }   class={ "max-sm:text-center"}>    Last Name P  </IonLabel>


                            <IonInput type="text"   clearInput={ true  }   maxlength={25 } value= {formData.apellido_p  }      onIonChange ={(event) => setFormData({...formData, apellido_p : event.detail.value  != undefined ? event.detail.value : ""})} > </IonInput>


                    </IonItem>
                 </div>

                          <div className='flex flex-col mt-4'  >

                             <IonItem >

                                 <IonLabel  position={"floating"   }   class={ "max-sm:text-center"}>  Last Name M </IonLabel>


                                 <IonInput type="text"   clearInput={ true  }   maxlength={25 } value= {formData.apellido_m  }       onIonChange ={(event) => setFormData({...formData, apellido_m: event.detail.value != undefined ? event.detail.value : ""})} > </IonInput>





                             </IonItem>
                         </div>

                         <div className='flex flex-col mt-4'  >

                              <IonItem >

                                 <IonLabel  position={"floating"  }   class={ "max-sm:text-center"}>    Password  </IonLabel>


                                  <IonInput type="password"     clearInput={ true  }   maxlength={25 } value= {formData.pass }      onIonChange ={(event) => setFormData({...formData, pass: event.detail.value != undefined ? event.detail.value : ""})} > </IonInput>
                             </IonItem>
                         </div>

                 <div className='flex flex-col mt-4'    >

                     <IonItem >

                           <IonLabel position={"floating"  }      class={ "max-sm:text-center"}> Email   </IonLabel>

                          <IonInput type="text"   clearInput={ true  }   maxlength={25 } value= {formData.correo }      onIonChange ={(event) => setFormData({...formData,  correo: event.detail.value != undefined ? event.detail.value : ""})} > </IonInput>




                     </IonItem>
                </div>

                         <div className='flex flex-col mt-4'  >

                             <IonItem >

                                 <IonLabel  position={"floating"  }   class={ "max-sm:text-center"}> Foto </IonLabel>


                                 <IonInput type="text"   clearInput={ true  }   maxlength={25 } value= {formData.foto}      onIonChange ={(event) => setFormData({...formData, foto : event.detail.value != undefined ? event.detail.value : ""})} > </IonInput>
                             </IonItem>
                         </div>





                   <div className=  'mt-8 flex flex-col gap-y-4'  >
                     <button type={"submit"  }
                         className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4   bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl text-white font-bold text-lg'>Sign
                          Up
                    </button>


                </div>
                     </form>
            </div>
        </div>
    ) ;
};

export default RegisterForms;