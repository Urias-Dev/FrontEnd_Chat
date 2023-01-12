import React from 'react';
import {IonInput, IonItem, IonLabel, IonNote} from "@ionic/react";

const RegisterForms: React.FC =  () => {
    return (

        <div className='  w-11/12   max-w-[950px]  px-10  py-20 rounded-3xl bg-white  border-2 border-gray-100    max-sm:border-0'>
            <h1 className='text-5xl font-semibold  max-sm:text-4xl max-sm:font-normal  text-center' >  Register  </h1>
            <p className='font-medium  text-lg text-gray-500 mt-4   text-center '> Create a new account </p>
             <div className='mt-8' >
                <div className=' flex flex-col ' >

                     <IonItem >
                        <IonLabel position={"floating"   }  className={"max-sm:text-center  "}> Name </IonLabel>
                        <IonInput type="text"    maxlength={25 } ></IonInput>
                    </IonItem>
                </div>

                <div className='flex flex-col mt-4'  >

                    <IonItem >

                        <IonLabel position={"floating"  }   class={ "max-sm:text-center"}> Last Name  </IonLabel>

                        <IonInput type="text"  > </IonInput >
                    </IonItem>
                </div>

                <div className='flex flex-col mt-4'  >

                    <IonItem >

                         <IonLabel position={"floating"  }   class={ "max-sm:text-center"}> Email </IonLabel>

                        <IonInput type="email"  > </IonInput >
                    </IonItem>
                </div>



                <div className='flex flex-col mt-4'  >

                    <IonItem >

                        <IonLabel position={"floating"  }   class={ "max-sm:text-center"}> Password </IonLabel>

                        <IonInput type="email"  > </IonInput >
                    </IonItem>
                </div>

                <div className='mt-8 flex flex-col gap-y-4'>
                    <button
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4   bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl text-white font-bold text-lg'>Sign
                         Up
                    </button>


                </div>
            </div>
        </div>
    ) ;
};

export default RegisterForms;