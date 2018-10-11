import React from 'react';
import ItemCardButton from '../../utility/Button'
const ItemCard = ({edithandler,removehandler,saveforlatehandler,item}) => {
    return(
        <div className="itemcard" >
           <div className="itemcard-image">
            <img  src={item.src}  alt={item.name} />
           </div>
            <div className="itemcard-content">
               <p className="itemcard-item-name">{item.name}</p>
               <p className="itemcard-item-style">Style#:{item.style}</p>
               <p className="itemcard-item-color">Color:{item.color}</p>
               <div className="itemcard-menu">
                  <ItemCardButton value={item.name} classname={'itemcardbutton'} name={'EDIT'} handler={edithandler}/> | <ItemCardButton value={item.name} classname={'itemcardbutton'} name={'X REMOVE'} handler={removehandler}/> | <ItemCardButton classname={'itemcardbutton'} name={'SAVE FOR LATER'} handler={saveforlatehandler}/>
               </div>
           </div>
        </div>
    )
      
}


export default ItemCard