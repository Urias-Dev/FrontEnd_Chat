import React from 'react';
import {
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonRefresher,
    IonRefresherContent,   RefresherEventDetail
} from "@ionic/react";

 import RegisterForms from "../components/RegisterForms";

  const Register: React.FC = () => {


       function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
         setTimeout(() => {
             // Any calls to load data go here
             event.detail.complete ();
         }, 2000);
     }
     return (<>

              <IonHeader  class   ="ion-no-border" >
                 <IonToolbar >
                        <IonButtons  slot="start" >
                        <IonBackButton  defaultHref="login"/>
                      </IonButtons >
                </IonToolbar>
             </IonHeader>

              <IonContent >
                  <IonRefresher slot="fixed"  onIonRefresh={handleRefresh} >
                      <IonRefresherContent  refreshingSpinner="bubbles"   >
                      </IonRefresherContent>
                  </IonRefresher>
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