
import React, {useState} from "react";

import { useHistory  } from "react-router-dom";

import {findMessages, finUserById, login} from "../Api" ;

import {IonAlert, IonContent, IonInput, IonItem, IonLabel, IonNote, IonPage, useIonLoading} from "@ionic/react";
import {  LoginData} from "../interfaces" ;



const LogInForms: React.FC     = () => {


    const [showAlert, setShowAlert] = useState(false) ;


    const [isSubmitted, setIsSubmitted] = useState(false);


    const [formData, setFormData] = useState<LoginData    > ( {
        correo: "", pass: ""
    } );




    const [isTouched, setIsTouched] = useState(false );
    const [isValid, setIsValid] = useState<boolean>();
    const validateEmail = (email: string) => {
        return email.match(
            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    };
    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;
        setIsValid(undefined);
        if (value === '') return;
        validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };

    const markTouched = () => {
        setIsTouched(true) ;
    };

    let navigate = useHistory();




    const handleSubmit = (event: any) => {

        event.preventDefault ();

        if (formData.correo.trim() === "") {
            setIsSubmitted(true);
            return;
        }


        login (formData).then(response    =>    {
            console.log("login exitoso      "  )



            navigate.push( `/chat-online/` +       response.data.data.user_id   )
            console.log(response.data.token )
            localStorage.setItem("token", response. data.  token )
            setFormData({correo: '', pass: ''})


        }). catch  (error => {
            if (error.message.includes("403")) {
                console.log("   cincorrects ")
                setShowAlert(true )
            }
        })

    }


    return (<>


        <div className={"flex  w-full h-screen"}>
            <div className={"w-full flex items-center justify-center lg:w-1/2   "}   >
                <div
                    className='w-11/12      max-w-[600px]   px-10 py-20 rounded-3xl bg-white border-2 border-gray-100 max-sm:border-0'>
                    <h1 className='text-5xl font-semibold max-sm:text-4xl    text-center'> Welcome </h1>
                    <p className='font-medium text-lg text-gray-500 mt-4 text-center '> Enter your credential </p>
                    <div className='mt-8'>
                        <div className='flex flex-col'>
                            <IonItem
                                 className={`${isValid && 'ion-valid'}  ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                                <IonLabel position={"floating"} className={"max-sm:text-center"}> Email </IonLabel >
                                <IonInput type="email" maxlength={25} onIonInput={(event) => validate(event)}
                                          onIonBlur={() => markTouched()} value={formData.correo}
                                          onIonChange={(event) => setFormData({
                                              ...formData,
                                              correo: event.detail.value != undefined ? event.detail.value : ""
                                          })}></IonInput>
                                <IonNote slot="helper">Enter a valid email </IonNote >
                                {isSubmitted && formData.correo.trim()  === "" &&
                                    <IonNote slot="error">Invalid email </IonNote>
                                 }
                            </IonItem>
                        </div>
                        <div className='flex flex-col mt-4'  >
                            <IonItem >
                                     <IonLabel position={"floating"} class={"max-sm:text-center"}>Password </IonLabel>
                                <IonInput type="password" value={formData.pass} onIonChange={(event) => setFormData({
                                    ...formData,
                                     pass: event.detail.value != undefined ? event.detail.value : ""
                                })}> </IonInput>
                                 <IonNote slot="helper"> Enter your password </IonNote>
                            </IonItem>
                        </div>
                        <div className='mt-8 flex justify-between items-center'>
                            <div>
                                <input type="checkbox" id='remember'/>
                                <label className='ml-2 font-medium text-base' htmlFor="remember"> Remember for 30
                                    days</label>
                            </div>
                            <button className='font-medium text-base text-violet-500'>Forgot password</button>
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button onClick={(event) => handleSubmit(event)}
                                    className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4   bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl text-white font-bold text-lg'>Sign
                                 in

                                  <IonAlert
                                    isOpen={showAlert}
                                    onDidDismiss={() => setShowAlert(false)}
                                    header={'Credenciales Incorrectas'}
                                    message={'Ingresa las credenciales correctas'}
                                    buttons ={['OK']}
                                 />
                            </button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'> Don't have an account ? </p>
                              <a href="/register"  >
                                <button
                                    className='ml-2 font-medium text-base text-violet-500'> Sign up
                                </button>

                            </a>
                        </div>
                    </div>
                </div>


            </div>

            <div
                className={"hidden  lg:flex h-full bg-no-repeat bg-[length:700px_700px] bg-center  w-1/2  items-center  justify-center bg-[url('/public/assets/img_login.svg')]"}>

            </div>
        </div>

    </>);
};

export default LogInForms;