import { addItemStringBuilder} from "./components/cart.js";
import {addToCartButtonEvent} from "./components/store.js"

let allFunctions = () => {
    addToCartButtonEvent()
    addItemStringBuilder()
}

allFunctions()
