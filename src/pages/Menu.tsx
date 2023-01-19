import React from 'react';
import {
    IonBadge,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonRouterOutlet
} from "@ionic/react";
import {
    calendar,
    call, callOutline,
    chatbubble,
    chatbubbleOutline,
    informationCircle,
    personCircle,
    settingsOutline
} from "ionicons/icons";

import {Redirect, Route} from "react-router-dom";
import LogIn from "./LogIn";
import Register from "./Register";
import {IonReactRouter} from "@ionic/react-router";
import Conversation from "../components/Conversation";
import Profile from "../components/Profile";
import Contacts from "../components/Contacts";

const Menu: React.FC = () => {
    return (<>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path= "/contacts">
                               <Contacts />
                        </Route >


                              <Route exact path={"/conversation"   }>
                                  <Conversation/>

                           </Route >

                        <Route exact path={"/profile"    }>
                            <Profile />

                        </Route >
                     </IonRouterOutlet>

                      <IonTabBar slot="bottom">

                          <IonTabButton   tab="contacts"  href="/contacts"    >
                              <IonIcon icon= {callOutline } aria-hidden="true"/>
                            <IonLabel>  Contacts </IonLabel >
                             <IonBadge>7 </IonBadge>
                          </IonTabButton>

                             <IonTabButton tab="conversation"    href= {"/conversation"}>

                             <IonIcon   icon={chatbubbleOutline}  aria-hidden="true"/>
                            <IonLabel> Chat
                            </IonLabel>
                            <IonBadge        > 10  </IonBadge>
                         </IonTabButton>
                        <IonTabButton  tab="profile"   href={"/profile"} >
                            <IonIcon icon={settingsOutline } aria-hidden="true"/>
                            <IonLabel> Settings
                              </IonLabel>
                            </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>

        </>
    );
};

export default Menu;
