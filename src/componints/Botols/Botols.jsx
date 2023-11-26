import { useEffect } from "react";
import { useState } from "react";
import Botol from "../Botol/Botol";
import './Botols.css'
import { addTools, getStortCart, removeFromLs } from "../../Utilitis/localhost";
import Cart from "../Cart/Cart";

const Botols = () => {
    const [Photos, setPhotos] = useState([])
    const [cart, setCarttoPhoto] = useState([]) 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data))
    },[])

    useEffect(() => {
        // console.log('aggydfygyg', Photos.length);
        if(Photos.length > 0){
            const stortId = getStortCart();
            console.log(stortId, Photos);
            const savecart = []
            for(const id of stortId) {
                console.log(id);
                const photo = Photos.find(photo => photo.id === id)
                console.log(photo)
                if(photo){
                    savecart.push(photo);
                }
            }
            setCarttoPhoto(savecart)
        }

    },[Photos])

    const handelClickToCart = (botol) => {
        console.log('this button is click');
        const newArryOfCart = [...cart, botol];
        setCarttoPhoto(newArryOfCart);
        addTools(botol.id)
    }
    const handelClickRemove = (id) =>{

        const ramaningid = cart.filter(photo => photo.id !== id);
        setCarttoPhoto(ramaningid);
        removeFromLs(id)
    }

    return (
        <div>
            <h2>Total Photo & ifno: {Photos.length}</h2>
            <Cart cart={cart} handelClickRemove={handelClickRemove}></Cart>
           <div className="botols-continer">
           {
                Photos.map(botol => <Botol 
                    key={Photos.id} 
                    botol={botol}
                    handelClickToCart={handelClickToCart}></Botol>)
            }
           </div>
        </div>
    );
};

export {Botols};