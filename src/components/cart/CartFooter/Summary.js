import React from 'react';
import Button from '../../utility/Button';
import Icon from '../../utility/icon.svg';
class Summary extends React.Component{
  constructor(props){
    super(props);
    this.state={
      subTotal:0,
      promotion:0,
      shipping:0,
      total:0,
      promotion_code:'',
      freeshipping:50
    }
  }
  componentDidMount(){
    this.cal_total()
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.items === this.props.items&&nextState===this.state){
      return false
    }
    else return true
}
  componentDidUpdate(prevProps){
    if (prevProps.items!== this.props.items){
      this.cal_total();
    }
  }
  apply_promotion=(e)=>{
    e.preventDefault();
    let promotion_code= this.refinput.value;
    //promotion code validation
    console.log(promotion_code);
    if(promotion_code==="AAA"){
      let promotion=5;
      this.setState({promotion,promotion_code},()=>this.cal_total())
    }
    else {
      this.setState({promotion:0,promotion_code:''},()=>this.cal_total())
      console.log('promotion code err')
    }
   
  }
  cal_total=()=>{
    let subTotal=0,
        shipping=0,
        total=0,
        promotion=parseFloat(this.state.promotion);
    this.props.items.forEach(item=>
      subTotal=subTotal+item.price*item.qty
    );
    if(subTotal){
      if(subTotal>=this.state.freeshipping){
        shipping=0
      }
      else shipping=12;
    }
    total = (subTotal+shipping-promotion).toFixed(2);
    subTotal = subTotal.toFixed(2);
    this.setState({subTotal,shipping,total})
    
  }
  render(){
    return( 
      <form onSubmit={()=>{console.log('checkou sumbit')}} >
       <div className="summary table">
           <div className="table-tr promotion">
              <div className="table-td promotion-label">ENTER PROMOTION CODE OR GIFT CARD</div>
              <div className="table-td promotion-input">
              <input type="text" ref={input=>this.refinput=input}></input>
              <Button handler={this.apply_promotion} name={"Apply"}></Button>
              </div>
           </div>
           
            <div className="table-tr subtotal">
              <div className="table-td subtotal-label">SUB TOTAL</div>
              <div className="table-td subtotal-price">${this.state.subTotal}</div>
            </div>
  
            <div className="table-tr promotion-code">
              <div className="table-td promotion-code-label">PROMOTION CODE {this.state.promotion_code} APPLIED</div>
              <div className="table-td promotion-code-price">${this.state.promotion?this.state.promotion:0}</div>
            </div>
            <div className="table-tr estimated-shipping">
              <div className="table-td estimated-shipping-label">
              ESTIMATED SHIPPING*
              {this.state.subTotal>0&&this.state.shipping===0&&<p className="shipping-quality">You quality for free shipping beacuse your order is over ${this.state.freeshipping}</p>}
              </div>
              <div className="table-td estimated-shipping-price">{this.state.shipping>0?`$${this.state.shipping}`:'Free'}</div>
            </div>
  
            <div className="table-tr estimated-total">
              <div className="table-td estimated-total-label">
              ESTIMATED TOTAL
              <p className="estimated-total-description">Tax will be applied during checkout</p>
              </div>
              <div className="table-td estimated-total-price">${this.state.total}</div>
           </div>
  
            <div className=" checkout">
              <a href="#root">CONTINUE SHOPPING</a>
              <Button name={"CHECKOUT"} type="submit" />
              <div className="checkout-description">
              <img src={Icon} alt="icon" />   <span>Secure checkout. Shopping is always safe&secure</span>
              </div>
            </div>
        
      </div>
      </form>
    )
  
  }
 
}

 
export default Summary


