import React from 'react';
import LogInForms from "../components/LogInForms";
import  {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonRow,
    IonTitle,
    IonToolbar,
    IonPage,
    IonItem, IonLabel, IonInput, IonNote, IonAlert
} from "@ionic/react";

const  LogIn: React.FC = () =>  {
     return  (



          <IonPage >
              <IonContent>

                   <LogInForms/>
              </IonContent>

         </IonPage>
     );
};

export default LogIn;