import { useEffect,useState } from "react";
import { MENU_API } from "../utilites/comman";
import Menus from "../utilites/menu"


const usemenuapi = (resID)=>{
    const [menul,setinfo]=useState(Menus[0].data);
//     useEffect(()=>{fetchmenu();
//     },[]);
//     const fetchmenu = async ()=>{
//      const data = await fetch( MENU_API+resID
//     );
//     const json = await data.json();
//  //    setmenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemcards[2].cards.info.itembadge.name)
//     setinfo(json.data);
//    //  console.log(setinfo);
//  };
console.log(menul);

 return menul;
}
export default usemenuapi;