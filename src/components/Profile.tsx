import React from 'react' ;
import {
    IonAvatar,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar
} from "@ionic/react";

 import  avatar  from    '../assets/img/avatar.png'
import {createOutline} from "ionicons/icons";

  const Profile  : React.FC   = () => {
    return (<>

                <IonHeader >

                    <IonToolbar  color={"primary" } >


                      <IonTitle  className={"text-center "} >Profile  </IonTitle>
                    </IonToolbar>

                  </IonHeader  >
             <IonContent >
                 <div  className={"m-10" }>
                     <IonToolbar  >
                         < IonAvatar >
                             <img  src={ avatar}  alt=""/>
                         </IonAvatar>
                     </IonToolbar>
                   </div>
                   <div  className={ "m-5"} >
                      <form  >

                           <IonItem  lines={"none" } >
                               <IonLabel position={"fixed"    }   className={"max-sm:text-center  "}>  Name: </IonLabel>
                               <IonInput  type="text"    maxlength={25 } value={"Urias"}> </IonInput>
                               <IonIcon icon={createOutline  }></IonIcon>
                           </IonItem>
                            <IonItem   lines={"none"}  >
                              <IonLabel position={"fixed"     }  className={"max-sm:text-center  "}> Last Name: </IonLabel>
                              <IonInput   type="text"    maxlength={25  }  value={ "Perez "} > </IonInput>
                                <IonIcon icon={createOutline  }></IonIcon>

                            </IonItem>

                          <IonItem  lines={ "none"} >

                              <IonLabel position={"fixed"     }  className={"max-sm:text-center   " }>Email: </IonLabel>
                              <IonInput   type="email"      maxlength={25 }  value={  "urias.perezq@gmail.com"}> </IonInput>
                              <IonIcon icon={createOutline  }></IonIcon>
                          </IonItem>
                      </form >
                  </div>
            </IonContent>


        </>
    );
};

export default Profile;