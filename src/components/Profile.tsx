import React, {useEffect, useState} from 'react' ;
import {
    IonAvatar, IonButtons,
    IonContent, IonFabButton, IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel, IonList, IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react"  ;

 import  avatar  from     '../assets/img/avatar.png'
 import {createOutline, logOutOutline, sendOutline} from "ionicons/icons"   ;
import {useHistory} from "react-router-dom";
import {finUserById} from "../Api";
import {getId} from "../interfaces";


       const  Profile  : React.FC  <getId >  = ({user_id  }) =>       {



          let  [  data  ,setData ] = useState({

              nombre: '',
              apellido_p: '',
              correo: ''

          }   )




                  let   navigate  =  useHistory    ( ) ;

              const   handleSubmit    =()   => {
                       localStorage.removeItem( 'token'       )
                    navigate.push('/login'  )
                  }

                const   getData  =     ()    =>    {


                    finUserById ( user_id  )  .then    (response      =>   {
                        setData    (  {nombre : response. data.data.nombre  , apellido_p:   response.data.data.apellido_p   ,  correo:  response.data.data.correo     }   )

                  }   )
              }


                 useEffect(() =>    {
                      getData  ();
                     }   , []  )

            return  (< >

                 <IonPage>


                   <IonContent >
                     <div   className={"m-10 " } >
                         <IonToolbar  >
                            <div  className ={"flex  ion-justify-content-center  "    } >
                                <  IonAvatar  >
                                      <img   src={  avatar    }      alt=""/>
                                  </IonAvatar >
                            </div>
                         </IonToolbar>
                        </div>
                       <div   className ={ "m-5"  }   >
                           <form  >






                               <IonItem  lines={  "none" }      >
                                    <IonLabel position={"fixed"     }     className={"max-sm:text-center  "  }  >    Name:     </IonLabel >
                                     <IonInput  type="text"    maxlength={25 } value={ data.nombre    } > </IonInput>
                                      <IonIcon icon={createOutline  }></IonIcon>
                               </IonItem>

                            <IonItem   lines={"none"}  >
                              <IonLabel position={"fixed"      }  className={"max-sm:text-center   "}> Last Name : </IonLabel>
                              <IonInput   type="text"    maxlength={ 25  }    value ={  data.apellido_p } > </IonInput>
                                <IonIcon icon={createOutline  }></IonIcon>

                            </IonItem>

                            <IonItem  lines={ "none"} >

                              <IonLabel position={"fixed"   }  className={"max-sm:text-center   " }>Email: </IonLabel>
                              <IonInput   type="email"      maxlength={25 }  value ={data.correo   }> </IonInput>
                              <IonIcon icon={createOutline   }> </IonIcon>
                          </IonItem >

                           </form  >

                   </div>

             </IonContent  >

                <IonFooter class = {"ion-no-border" }>
                    <div className= { "flex ion-justify-content-end  mb-10 mr-3  "}  >
                         <button   onClick={() => handleSubmit () } >
                            <IonFabButton size={"small"} color={ "primary" }  >
                                <IonIcon  icon= {logOutOutline   }  ></IonIcon>
                            </IonFabButton>
                        </button>
                    </div>
                </IonFooter>

            </IonPage >


        </>
    );
};

export default Profile;