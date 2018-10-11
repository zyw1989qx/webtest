import React from 'react';
import ItemCard from './ItemCard';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
const CartItemList = ({edithandler,removehandler,saveforlatehandler,items,deletedItem}) => {
    return(
       <div className="table itemlist">
            <div className="table-tr">
               <div className="table-th items ">{items.length?items.length:0} ITEMS</div>
               <div className="table-th size ">SIZE</div>
               <div className="table-th qty "> QTY</div>
               <div className="table-th price ">PRICE</div>
               </div>
               <TransitionGroup className="item">
               {items.length&&items.map(item=>{
                    return(
                      
                        <CSSTransition
                            key={item.name}
                            timeout={300}
                            classNames="fade"
                        >
                        <div className="table-tr" key={item.name}>
                            <div className="table-td items"><ItemCard item={item} edithandler={edithandler} removehandler={removehandler} saveforlatehandler={saveforlatehandler} /></div>
                            <div className="table-td size" >{item.size}</div>
                            <div className="table-td qty">{item.qty.replace(/\b(0+)/gi,"")}</div>
                            <div className="table-td price">{item.price}</div>
                       </div>  
                       </CSSTransition>  
                    )
                 })
                }
                </TransitionGroup>
         </div>
    )
}

export default CartItemList


