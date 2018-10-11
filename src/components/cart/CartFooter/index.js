import React from 'react';
import Contact from './Contact';
import Summary from './Summary';
const CartFooter = ({items}) => (
        <div className="cartfooter">
            <Contact />
            <Summary items={items} />
        </div>
    )


export default CartFooter