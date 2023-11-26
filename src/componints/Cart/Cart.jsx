import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handelClickRemove}) => {
    return (
        <div>
            <h3>Crat : {cart.length} </h3>
            <div className="cart-continer">
            {
                cart.map(photo => <div key={photo}>
                    <img  src={photo.thumbnailUrl}></img> <br />
                    <button onClick={() => handelClickRemove(photo.id)}>Remove</button>

                </div>)
            }
            </div>
        </div>
    );
};


Cart.propTypes ={
 cart: PropTypes.array.isRequired,
 handelClickRemove: PropTypes.func.isRequired,
}
export default Cart;