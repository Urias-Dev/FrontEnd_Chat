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
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> {}

 const Menu: React.FC<Props> =  ({match})  =>  {

     const [selectedOption,  setSelectedOption] =  useState (  'contacts'   );

     const { id } = match.params;

     console.log("el idd es", id)






     return    ( <  >

             <IonPage>
                  <IonHeader >

                     <IonToolbar color={ "primary" }>
                        <IonTitle slot={ "start"} >DevChat </IonTitle>
                    </IonToolbar>

               <IonSegment   value={selectedOption   }    onIonChange={e  => e.detail.value &&  setSelectedOption(e.detail.value)}>
                 <IonSegmentButton  value="contacts"  >
                    <IonLabel >   Contacts </IonLabel>
                 </IonSegmentButton>


                   <IonSegmentButton  value="profile"     >
                     <IonLabel>  Profile </IonLabel>
                   </IonSegmentButton>

               </IonSegment>

             </IonHeader>

             <IonContent >

                   {selectedOption  === 'contacts' &&  <Contacts user_id ={id  }  />    }
                     {selectedOption === 'profile' &&  <Profile   user_id={id}  />  }

             </IonContent>

             </IonPage>

         </>

     ) ;
};

export default Menu;
