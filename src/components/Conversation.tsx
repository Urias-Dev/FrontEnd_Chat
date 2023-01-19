import  React from 'react' ;

import  avatar  from '../assets/img/avatar.png'
 import {
    IonAvatar,
    IonButtons, IonCol,
    IonContent,
    IonFabButton,
      IonFooter, IonGrid,
    IonHeader, IonIcon, IonRow, IonSpinner,
    IonTextarea,
    IonTitle  ,
    IonToolbar   ,
     IonBackButton
} from "@ionic/react";

const Conversation : React.FC  = () => {
     return  (<>

                     <IonHeader >
                    <IonToolbar  color={"primary"  } >
                       <IonButtons    slot="start" >
                          <IonBackButton   defaultHref="contacts"/>

                        </IonButtons >
                         <IonAvatar slot={"start"  } >
                           <img   className= {    "p-2 "} src=   {avatar } alt="" />
                       </IonAvatar >
                     <IonTitle  >  Urias    </IonTitle>

                    </IonToolbar>
             </IonHeader >
                <IonContent scrollEvents={true}  >
                   <IonGrid >

                        <IonRow   >


                                   <IonCol size={"9"} className={  "p-2 border rounded-2xl  mt-4  whitespace-pre-wrap bg-amber-300 bg-gray-500 text-white "} >
                                  <b>User 1 </b>
                                <span  >  Hola , Como estas ? </span>
                                 <div className= {"ml-52 "}> <br/>
                                      <span> 10:09 pm</span>
                                </div >
                                </IonCol>

                                <IonCol offset={"3"}  size={"9"}   className={" p-2  border   rounded-2xl   mt-4  whitespace-pre-wrap bg-blue-500 text-white "} >
                                 <b>User  2 </b>
                                 <span >  Bien y tu ? </span>
                                   <div   className={ "ml-48"  }><br/>
                                       <span> 10:15  pm</span >
                                     </div>
                             </IonCol>

                            <IonCol offset={"3"}  size={"9"}   className={" p-2  border   rounded-2xl   mt-4  whitespace-pre-wrap bg-blue-500 text-white "} >
                                <b>User  2 </b>
                                <span >  Bien </span>
                                <div   className={ "ml-48"  }><br/>
                                    <span> 10:15  pm</span >
                                </div>
                            </IonCol >


                            <IonCol size={"9"} className={  "p-2 border rounded-2xl  mt-4  whitespace-pre-wrap bg-amber-300 bg-gray-500 text-white "} >
                                <b>User 1 </b>
                                 <span  >   👍👍</span>
                                <div className= {"ml-52"}>  <br/>
                                    <span> 10:09 pm</span>
                                </div >
                            </IonCol>

                        </IonRow >
                    </IonGrid >

              </IonContent>

        </>
      );
 };

export default Conversation;
