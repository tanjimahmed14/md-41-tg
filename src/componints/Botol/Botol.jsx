import PropTypes from 'prop-types';
import './Botol.css'


const Botol = ({botol, handelClickToCart}) => {
    // console.log(botol);
    const {albumId, id, thumbnailUrl,title} =botol;
    return (
        <div className="botol-style">
            <p>ID : {id}</p>
            <h3>{title}</h3>
            <h5>Phone no: {albumId}</h5>
            <img src={thumbnailUrl} alt="" /> <br />
            <button onClick={() => handelClickToCart(botol)} >Add to Cart</button>
        </div>
    );
};

Botol.proptypes = {
    botol: PropTypes.array .isRequired,
    handelClickToCart: PropTypes.func.isRequired
}

export default Botol;