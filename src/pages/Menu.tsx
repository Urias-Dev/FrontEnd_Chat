import React, {useState} from 'react';
import {
    IonBadge,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonRouterOutlet,   IonSegment, IonSegmentButton, IonToolbar, IonTitle, IonPage
} from "@ionic/react";


 import Profile from "../components/Profile";
 import Contacts from "../components/Contacts";
   import {RouteComponentProps, useLocation} from 'react-router-dom';


type StateType =  {

    id : number   ;
  
}



const  Menu: React.FC   =  (   )  =>  {

     const [selectedOption,  setSelectedOption] =   useState (  'contacts'   );


     const location    =  useLocation <  StateType     >     (   )   ;
     const  id  =   location.state?. id  ;
  




     return    ( <  >

             <IonPage>
                   <IonHeader >

                     <IonToolbar color={ "primary" }>
                        <IonTitle slot={ "start"} >  DevChat    </IonTitle>
                    </IonToolbar>

               <IonSegment    value={selectedOption   }    onIonChange={e  =>  e.detail.value &&   setSelectedOption(e.detail.value)}>
                 <IonSegmentButton   value="contacts"   >
                    <IonLabel >   Contacts </IonLabel > 

                 </IonSegmentButton>


                   <IonSegmentButton  value="profile"         >
                     <IonLabel>  Profile </IonLabel>
                   </IonSegmentButton>

               </IonSegment>

             </IonHeader>

             <IonContent >

                   {selectedOption  === 'contacts'     &&   <Contacts  id={id}     />      }
                     {selectedOption === 'profile' &&   <Profile id={id}   />  }

             </IonContent>

             </IonPage>

         </>

     ) ;
};

export default Menu;
