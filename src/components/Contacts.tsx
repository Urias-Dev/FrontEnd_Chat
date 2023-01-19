 import React, {useState} from 'react';
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
    IonBadge, IonSearchbar
} from "@ionic/react";

 const Contacts : React.FC  = () => {

      const data = [ {

           "name":   "urias",
             "message": "Hola , Urias"
    },
          {
              "name" : "Yahir" ,
                "message"  : "Hola, Yahir "
          } ,
          {
              "name" : "Axel" ,
              "message"  : "😂😂   "
          },
          {
              "name" : "Oliver" ,
              "message"  : "Como estas? "
          }  ,

          {
              "name" : "Uicab" ,
              "message"  : "Si  "
          }
      ]

     let [results , setResults] = useState([...data] ) ;

     const handleChange  = (ev: Event) => {
         let query = "";
         const target = ev.target as HTMLIonSearchbarElement;
         if (target) query = target.value!.toLowerCase ();

          setResults(data.filter(d => d.name.toLowerCase()  .indexOf(query) > -1));
     }

     return   (  <>
         <IonHeader  >
                <IonToolbar    color ="primary"   >
                         <IonTitle class={ "text-center "}> Contacts   </IonTitle>

               </IonToolbar>

             <IonToolbar>
                  <IonSearchbar  color={ "light"}    debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
              </IonToolbar>

             </IonHeader>

               <IonContent >
                 <IonList  lines={   "none"} >

                      { results.map( results  =>


                         <IonItem    href= { "/conversation" }     >
                             <IonAvatar slot={"start"    }>
                                 <img   src=  {avatar} alt="" />
                             </IonAvatar >
                             <IonLabel  >
                                 <h2>{results.name}</h2>
                                 <h3> { results.message  } </h3>

                              </IonLabel >
                             <IonBadge slot={"end"} className={"rounded-full p-2"} color={  "primary"  }>12</IonBadge>
                         </IonItem  >
                      )}

                     {  /*  <IonItem     href= { "/conversation" }
                        <IonAvatar slot={"start"    }>
                              <img   src=  {avatar} alt="" /
                           </IonAvatar >
                            <IonLabel  >
                          <h2>  Urias </h2 >
                             <h3>Hola,  Como estas? </h3>
                         </IonLabel >
                        <IonBadge slot={"end"} className={"rounded-full p-2"} color={  "primary"  }>12</IonBadge>
                   </IonItem  >


                      <IonItem   href={"/conversation"  }>
                        <IonAvatar slot={"start"   } >
                            <img   src= {avatar} alt="" />
                        </IonAvatar>
                        <IonLabel  >
                            <h2>Yahir  </h2>
                            <h3>  Hola</h3>
                        </IonLabel >
                        <IonBadge slot={"end"} className={"rounded-full p-2"}     color={ "primary"  }>10 </IonBadge>
                      </IonItem  >
                     <IonItem   href={"/conversation"  } >
                        <IonAvatar slot={"start"   }>

                            <img   src= {avatar} alt="" />
                         </IonAvatar>
                        <IonLabel   >
                            <h2>Axel </h2>
                            <h3> 🤣🤣🤣  </h3>
                        </IonLabel >

                        <IonBadge slot={"end"} className={"rounded-full  p-2"} color= {  "primary"  }>14 </IonBadge>
                    </IonItem  >
                    <IonItem   href={"/conversation" }>
                        <IonAvatar slot={"start"   }>


                             <img   src= {avatar} alt="" />
                        </IonAvatar>

                            <IonLabel  >
                             <h2>Urias </h2>
                            <h3>Hola, Como estas?</h3>
                        </IonLabel >
                        <IonBadge slot={"end"}   className={"rounded-full  p-2"} color={  "primary"  } >  23  </IonBadge >
                    </IonItem  ><IonItem    href={"/conversation"    }>
                    <IonAvatar slot={"start"   }>

                        <img   src= {avatar} alt="" />
                    </IonAvatar>
                    <IonLabel  >
                    <h2>Carlos  </h2>
                        <h3>Si,</h3>
                    </IonLabel >
                      <IonBadge  slot={"end"}  className= {"rounded-full  p-2"} color={ "primary"   }>10 </IonBadge>
                  </IonItem  >

                     */ }
                </IonList>
         </IonContent>

         </>
    );
};

export default Contacts;