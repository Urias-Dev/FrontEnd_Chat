import React from 'react';
import LogInForms from "../components/LogInForms";
import {IonButton, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar} from "@ionic/react";

const  LogIn: React.FC = () => {
     return (<>
            <IonHeader>
            </IonHeader>
                <IonContent>
                       <div  className={"flex  w-full h-screen"  }>
                          <div    className={ "w-full flex items-center justify-center lg:w-1/2 max-sm:h-3/4"   }>
                                  <LogInForms  />
                          </div >

                             <div    className= {"hidden  lg:flex h-full bg-no-repeat bg-[length:700px_700px] bg-center  w-1/2  items-center  justify-center bg-[url('/public/assets/img_login.svg')]"}>

                            </div>
                       </div>
            </IonContent>
        </>
     );
};

export default LogIn;