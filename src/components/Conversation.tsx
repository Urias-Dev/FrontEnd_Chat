import React, { useEffect, useState } from 'react';


import avatar from '../assets/img/avatar.png'
import { io } from 'socket.io-client'

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
} from "@ionic/react";
import { sendOutline } from "ionicons/icons";
import { Message } from "../interfaces";
import { RouteComponentProps, useHistory, useLocation } from 'react-router-dom';
import { findChat, getChatId, sendMessage } from "../Api";


type StateType = {
    name: string;
    id1: number;
    id2: number;

}


const Conversation: React.FC = () => {


    const location = useLocation<StateType>();
    const name = location.state?.name;
    const id1 = location.state?.id1;
    const id2 = location.state?.id2;


    const socket = io('http://localhost:3000'
    )


    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState(" ")
    const [items, setItems] = useState(0);


    const datos = async () => {


        let id_cond: number;


        findChat(id1, id2).then(responze => {

            setMessages(responze.data)


        })


    }


    useEffect(() => {


        datos();


        const receiveMessage = (message: Message) => {


            findChat(id1, id2).then(responze => {
                console.log(message, responze.data)
                setMessages([message, ...responze.data])


            })


        };


        socket.on('message', receiveMessage)


        return () => {
            socket.off('message', receiveMessage)
            socket.off('disconnect')
        }


    }, [])


    const handleSubmit = async (event: any) => {
        event.preventDefault();


        const currentDate = new Date();

        const currentDateFormatted = currentDate.toLocaleDateString('en-US');


        const ChatId = await getChatId(id1, id2)

        console.log(ChatId)


        const newMessage: Message = {


            contenido: message,
            id_usuario_env: id1,
            id_conversacion: ChatId,

            fecha: currentDateFormatted


        }


        sendMessage(newMessage).then(response => {

            console.log(response.data)


            socket.emit("message", newMessage.contenido)
            setMessage("")
        }
        )


    }


    return (< >

        <IonPage>

            <IonHeader>
                <IonToolbar color={"primary"}>
                    <IonButtons slot="start">


                        <IonBackButton defaultHref={"/chat-online/"} />


                    </IonButtons>


                    <IonAvatar slot={"start"}>
                        <img className={"p-2 "} src={avatar} alt="" />
                    </IonAvatar>

                    <div>
                        <IonTitle>     {name}       </IonTitle>
                        <h2 className=" ml-5"> Online </h2>
                    </div>
                </IonToolbar>

            </IonHeader>

            <IonContent scrollEvents={true}>


                <IonGrid>


                    {messages.map((object, index) => (


                        <IonRow key={index}>

                            <IonCol size={"8 "} offset={object.id_usuario_env === id1 ? "4" : "0 "}
                                className={`p-2    border rounded-2xl       ${object.id_usuario_env === id1 ? " bg-gradient-to-r   from-cyan-500 to-blue-500  mt-4  whitespace-pre-wrap   text-white " : " bg-gradient-to-r  from-emerald-500 to-emerald-500  mt-4  whitespace-pre-wrap   text-white "} `}>


                                <div className={"  flex   justify-start   "}>
                                    <span>{object.contenido}  </span>
                                </div>
                                <div className={"flex justify-end "}><br />
                                    <span>   {object.fecha}  </span>
                                </div>


                            </IonCol>


                        </IonRow>
                    ))}


                </IonGrid>


            </IonContent>


            <IonFooter class={"ion-no-border   m-1"}>
                <form onSubmit={handleSubmit}>

                    <IonToolbar>


                        <IonInput type={"text"} name={"message"}
                            className={"border border-cyan-600     rounded-full  "}
                            value={message}
                            onIonChange={(event) => setMessage(event.detail.value != undefined ? event.detail.value : " ")}
                            placeholder={"message"} class={"ion-text-center"} required> </IonInput>


                        <button slot={"end"} type={"submit"} onClick={(e) => handleSubmit(e)}>
                            <IonFabButton size={"small"} color={"primary"}>
                                <IonIcon icon={sendOutline}></IonIcon>
                            </IonFabButton>


                        </button>


                    </IonToolbar>
                </form>
            </IonFooter>


        </IonPage>


    </>
    );
};

export default Conversation;
