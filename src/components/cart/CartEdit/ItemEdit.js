import React from 'react';
import ColorSelector from './ColorSelector'
import {colors} from '../../utility/data';


class ItemEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
           name:'',
           size:'small',
           qty:0,
           color:'blue'
        }
    }
    componentDidUpdate(prevProps){
        if (prevProps.showEditModal!== this.props.showEditModal){
            this.setState({
                name:this.props.item.name,
                size:this.props.item.size,
                qty:this.props.item.qty,
                color:this.props.item.color
            })
        }
      }
    changehandler=(e)=>{
     if(e.target.name==='color'){
         this.setState({color:e.target.value})
     }
     if(e.target.name==='qty'){
        this.setState({qty:e.target.value})
    }
     if(e.target.name==='size'){
        this.setState({size:e.target.value})
    }
    }
   
    submithandler = (e)=>{
       this.props.itemSave(this.state)
    }
  
    render(){
        return(
            <div  className="modal" style={{display:`${this.props.showEditModal?'block':'none'}`}}>
           
            <div className="modal-container">
            <span className="close" onClick={this.props.closehandler}>&times;</span>
               <div className="modal-content">
                   <h3>{this.props.item.name}</h3>
                   <p className="modal-price">${this.props.item.price}</p>
                   <p className="modal-style">{this.props.item.style}</p>
                   <div className="modal-color-selector">
                      <ColorSelector colors={colors} name="color" colorhandler={this.changehandler} />
                   </div>
                   <p className="modal-color">Color:{this.state.color}</p>
                   <div className="selector-container">
                    <select className="modal-size" value={this.state.size} name="size" onChange={this.changehandler}>
                    <option value ="S">small</option>
                    <option value ="M">medium</option>
                    <option value ="L">large</option>
                    <option value="XL">extra large</option>
                    </select>
                   <input className="modal-qty"  value={this.state.qty|0} name="qty" onChange={this.changehandler} type="number" />
                   </div>
                   <button className="modal-btn" onClick={this.submithandler} >Edit</button>
                   <a href="#root">Check product details</a>
               </div>
               <div className="modal-img">
                  <img src={this.props.item.src} alt={this.props.item.name} />
                </div>
            </div>
       </div>
   
        )
    }
}
export default ItemEdit