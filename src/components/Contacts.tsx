 import React, {useEffect, useState} from 'react';
 import avatar   from    '../assets/img/avatar.png'





 import {
    IonContent,
    IonHeader,
    IonTitle,

    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonBadge, IonSearchbar, IonPage
 } from "@ionic/react";
 import {Simulate} from "react-dom/test-utils";
 import error = Simulate.error;
 import {findUser} from "../Api";
 import {getId} from "../interfaces";

   const  Contacts : React.FC <getId> = ( {user_id})  =>   {



       let [results  , setResults      ]   =      useState  (       []      )







       const datos = () =>    {
              findUser() .then     (response =>  {
                   setResults  (response.data.data  )

             }  )
           }



         useEffect(()    => {
         datos  ( )  ;
            } ,   [results] );





         const    handleChange =   (  ev: Event)   =>  {



                 let query =   "";

                   const target  =     ev.    target  as   HTMLIonSearchbarElement    ;

                 if (target  )  query =  target.value!.  toLowerCase     (  );

               setResults  (results.    filter       ( (objects :    any   )  =>          objects.nombre.toLowerCase()  .indexOf(query) >   -1))  ;

            }














         return  (  <>

             <IonPage >
                   <div className={"mt-5 "}      >
                       <IonSearchbar   class={" ion-no-padding "} color= {  "light"    }     debounce={1000}      onIonChange={(ev) => handleChange(ev)}   > </IonSearchbar>

               </div >


                <IonContent >

                      <IonList     lines={   "none" }    >

                        {  results.map    ( (objects: any        )      =>


                           <IonItem    href= {  "/chat/"+ user_id     }   key= {objects.user_id     }     >
                             <IonAvatar slot={"start"   }>
                                 <img   src=  {avatar} alt=""   />
                             </IonAvatar >
                             <IonLabel  >
                                 <h2   >{objects .nombre  }</h2>
                                 <h3> { objects.apellido_p  } </h3>

                               </IonLabel >
                             <IonBadge slot={"end"} className={"rounded-full p-2 "} color={  "primary"  }>12</IonBadge>
                           </IonItem  >

                       )   }




                </IonList>

                 </IonContent >
             </IonPage>

         </>
    );
};

export default Contacts;