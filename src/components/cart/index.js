import React, { Component } from 'react';
import CartHeader from './CartHeader/index';
import CartItemList from './CartItemList/index'
import CartFooter from './CartFooter/index';
import ItemEdit from './CartEdit/ItemEdit'
import {items} from '../utility/data';
class Cart extends Component {
  state={
    items:items,
    selectedItem:[],
    showEditModal:false,
    deletedItem:''
  }
  removehandler=(e)=>{
      console.log(e.target.value);
      let items = this.state.items.filter(item=>item.name!==e.target.value);
      this.setState({items,deletedItem:e.target.value})
  }
  edithandler=(e)=>{
    let item = this.state.items.find(item=>item.name===e.target.value);
    this.setState({selectedItem:item,showEditModal:!this.state.showEditModal});
  }
  itemSave=(item)=>{
    let items = this.state.items.map(element=>{
         if(element.name===item.name){
           element.color=item.color;
           element.size=item.size;
           element.qty=item.qty;
         }
         return element
    })
    this.setState({items,showEditModal:false,selectedItem:[]});
  }
  closehandler = ()=>{
    this.setState({showEditModal:false})
 }
 
  render() {
    return (
        <div className="cart container">
            <CartHeader />
            <CartItemList items={this.state.items} removehandler={this.removehandler} edithandler={this.edithandler} deletedItem={this.state.deletedItem}/>
            <CartFooter items={this.state.items} />
            <ItemEdit showEditModal={this.state.showEditModal} item={this.state.selectedItem} closehandler={this.closehandler} itemSave={this.itemSave} />
        </div>
    );
  }
}

export default Cart;
