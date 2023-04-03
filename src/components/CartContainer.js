import CartItem from "./CartItem"
import { useSelector } from "react-redux"
const CartContainer = () => {
    const {CartItem,total,amount} = useSelector((store)=>store.cart);
    return(
        <div>
            {/* <CartItem /> */}
        </div>
    )
}

export default CartContainer