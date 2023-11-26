
    const getStortCart = () => {
        const storedCardStringfy = localStorage.getItem('cart');
        if(storedCardStringfy){
            return JSON.parse(storedCardStringfy)
        }
        return []
    }


    const saveTocart = (cart) => {
        const cartStringfy = JSON.stringify(cart);
        localStorage.setItem('cart', cartStringfy);
    }

    const addTools = (id) =>{
        const cart = getStortCart();
        cart.push(id);

        saveTocart(cart);
    }

    const removeFromLs = (id) => {
        const cart = getStortCart();
        const remaning = cart.filter(idx => idx !== id);
        saveTocart(remaning);
    }

    export {addTools, getStortCart, removeFromLs}