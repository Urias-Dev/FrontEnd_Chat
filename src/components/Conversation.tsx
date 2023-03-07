import React, {useEffect, useState} from 'react' ;


 import  avatar  from '../assets/img/avatar.png'
import {io}   from 'socket.io-client'

import {
    IonFooter,
    IonAvatar,
     IonButtons, IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonRow,

    IonTitle,
    IonToolbar,
    IonBackButton, IonInput, IonButton, IonIcon, IonPage, IonTextarea, IonFabButton
}  from "@ionic/react";
  import {sendOutline} from "ionicons/icons" ;
import {Message} from   "../interfaces"  ;
import {RouteComponentProps, useHistory ,  useLocation} from 'react-router-dom';
import {findMessages,  sendMessagess} from "../Api";

  type StateType   = {
     name: string;
}



 const Conversation :  React.FC  =   ()  =>

       {






           const location = useLocation<StateType >   () ;
           const name = location.state?.name;






            const   socket =  io ('http://localhost:3000'   )


      const [messages, setMessages ] = useState < Message    [ ]>( [] );
        const  [message, setMessage  ]      =  useState(  ""    )







             useEffect  (  (   )   =>   {







                 const  receiveMessage    =        (   message   :    Message   )              =>  {
                        setMessages (    [   ...messages , message        ]


                          )


          };






         socket. on   (  'message'       ,     receiveMessage      )

          return () =>  {
             socket.off  ( 'message'   , receiveMessage    )
              socket.off( 'disconnect'  )
         }

      } ,  [messages, socket   ]     )


              const    handleSubmit =   (event: any     )=>  {
             event. preventDefault (  ) ;

               const currentDate = new   Date( ) ;

                  const   currentTime =   currentDate.toLocaleTimeString   ( 'en-US',   { hour: 'numeric', minute: 'numeric', hour12: true  });




                  const  newMessage :         Message =    {


                          from   : name   ,

                         contenido:  message    ,
                           fecha  :   currentTime


                  }



                   sendMessagess (newMessage   ) . then      (  response =>  {
                        console.log ( response .data.   data    )
                    } )





                 setMessages   (  [...messages ,        newMessage          ] )



                      setMessage (""  )
                   socket.emit( "message"   ,      newMessage.contenido           )

              }






      return    (  < >

             <IonPage >

                 <IonHeader >
                     <IonToolbar   color={ "primary"  } >
                         <IonButtons    slot="start" >


                                  <IonBackButton      defaultHref={"/chat-online/"  }          />


                             </IonButtons >


                             <IonAvatar slot={"start"  } >
                               <img    className= {    "p-2 "} src=   {avatar } alt="" />
                             </IonAvatar >

                                   <div>
                                  <IonTitle  >     {name}       </IonTitle>
                               <h2 className= " ml-5"     > Online </h2>
                         </div>
                         </IonToolbar>

                </IonHeader >

                         <IonContent  scrollEvents={true}    >



                              <IonGrid    >


                                           {   messages.map  ((message      ,     index  )   =>    (


                                         <IonRow   key={index }   >

                                         <IonCol  size= {"8 "   }        offset={message. from === name   ?    "4"   :  "0"   }   className=  { `p-2   border rounded-2xl    ${message.  from === name  ?   " bg-gradient-to-r   from-cyan-500 to-blue-500  mt-4  whitespace-pre-wrap   text-white " : " bg-gradient-to-r  from-emerald-500 to-emerald-500  mt-4  whitespace-pre-wrap   text-white "} `} >

                                          <b> {message. from     }    </b  >
                                              <div  className= {"  flex  justify-start  " }    >
                                                  <span >{message. contenido   } </span>
                                           </div>
                                           <div  className=   {"flex justify-end " }> <br/>
                                               <span>{message.fecha} </span>
                                          </div >



                                         </IonCol    >





                                  </IonRow >
                              ) )    }







                         </IonGrid  >




                </IonContent   >


                 <IonFooter   class={ "ion-no-border m-1"   }   >
                     <form onSubmit={handleSubmit  } >

                     <IonToolbar >



                           <IonInput  name={"message" }  className={"border border-cyan-600    rounded-full  "}       value= {message }      onIonChange=  {( event   )   =>  setMessage(  event.detail.value != undefined ? event.detail.value: "")  }  placeholder={"message"  }   class={"ion-text-center"} ></IonInput>



                        <button   slot={"end"   }   type =   {"submit"}  onClick ={(event) =>    handleSubmit(event) } >
                              <IonFabButton size={"small" }  color={"primary" }   >
                                 <IonIcon  icon= {sendOutline  } ></IonIcon>
                              </IonFabButton>


                            </button >



                 </IonToolbar >
                     </form>
               </IonFooter>


             </IonPage>



           </>
      ) ;
 };

export default    Conversation;
