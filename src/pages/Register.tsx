import React from 'react';
import {IonContent, IonHeader} from "@ionic/react";
import LogInForms from "../components/LogInForms" ;
import RegisterForms from "../components/RegisterForms";

const Register: React.FC = () => {
    return (<>

            <IonHeader>
            </IonHeader>

            <IonContent>
                <div className={"flex   w-full h-screen"}>
                    <div className={"w-full flex items-center justify-center max-sm:h-3/4"}>
                        <RegisterForms/>
                    </div>

                </div>
            </IonContent>
        </>
    );
};

export default Register;