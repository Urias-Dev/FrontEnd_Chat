 import React from 'react';
 import {IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/react";

const MenuView : React.FC  = () => {
     return  (  <>
         <IonHeader >
              <IonToolbar >
                    <IonTitle class={ "text-center "}> Welcome to Chat    </IonTitle>
              </IonToolbar>
         </IonHeader>
         <IonContent >
             <h1 className={"text-center  py-72 "}> Welcome</h1>
         </IonContent>

         </>
    );
};

export default MenuView;