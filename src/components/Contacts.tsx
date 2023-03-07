 import React, {useEffect, useState} from 'react';
 import avatar   from    '../assets/img/avatar.png'





 import {
    IonContent,
    IonHeader ,
    IonTitle ,

    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonBadge, IonSearchbar, IonPage
 } from "@ionic/react";
  import {findUser} from "../Api";
 import {getId} from "../interfaces" ;
 import {useHistory, useLocation} from "react-router-dom";


 type StateType =  {
     name: string ;


 }




   const  Contacts : React.FC  <getId > = (props  )  =>   {



        let [results  , setResults      ]   =      useState  (       []           )

       let history  = useHistory  ();














     const datos  =      async ()   =>    {

                 const data   =    await  findUser () ;



                   setResults(data    )

           }




          useEffect (()     => {
              datos()
            } ,    []   )     ;





         const    handleChange =    (   ev: Event)   =>  {



                  let query =   "" ;

                   const target  =     ev.    target  as   HTMLIonSearchbarElement    ;

                 if (target  )  query =   target.value! .   toLowerCase     (  );

               setResults  (results.    filter       ( (objects :    any   )  =>            objects.nombre.toLowerCase()  .indexOf(query) >   -1))  ;

              }


               const  handleSubmit     =  ( name  : string  ) =>    {

                   const state:    StateType = {  name:    name     } ;

                  history.push      (   {
                           pathname:        '/chat/'       ,
                      state :  state
                    }  ) ;
             }














         return  (  <>

             <IonPage >
                   <div className={"mt-5 "}      >
                       <IonSearchbar   class={" ion-no-padding "} color= {  "light"    }      debounce={1000}      onIonChange={(ev) => handleChange(ev)}   > </IonSearchbar>

               </div >


                <IonContent >

                      <IonList     lines={   "none" }    >

                          {     results   .   filter  ((user  :   any) => user.user_id  !==  props.id )

                               .map    ( (objects: any          )      =>

                                < IonItem       onClick={ () => handleSubmit  (objects   .nombre  )   }   key =  {objects.user_id     }     >
                                  <IonAvatar slot={"start"   }>
                                 <img   src  =  {avatar }  alt= " "   />
                             </IonAvatar >
                             <IonLabel  >
                                 <h2   >{objects .nombre  }    </h2    >
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