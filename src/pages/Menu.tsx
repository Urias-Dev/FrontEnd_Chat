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
import MenuView from "../components/MenuView";
import {Redirect, Route} from "react-router-dom";
import LogIn from "./LogIn";
import Register from "./Register";
import {IonReactRouter} from "@ionic/react-router";

const Menu: React.FC = () => {
    return (<>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path= "/menu">
                            <MenuView/>
                        </Route>
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom">


                         <IonTabButton  tab="menu" href="/menu" >
                             <IonIcon icon= {callOutline } aria-hidden="true"/>
                            <IonLabel>  Contacts </IonLabel>
                             <IonBadge>6</IonBadge>
                        </IonTabButton>
                        <IonTabButton tab="login">

                             <IonIcon  icon={chatbubbleOutline} aria-hidden="true"/>
                            <IonLabel> Chat
                            </IonLabel>
                            <IonBadge>10 </IonBadge>
                         </IonTabButton>
                        <IonTabButton tab="login">
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
