import {printToDom} from '../helpers/util.js';
import {book} from './store.js';

let addItemStringBuilder = () => {
    let priceString = '';
    priceString += `<div class = "book">`;
    priceString += `<h3>${book.price}</h3>`;
    priceString += `<img src ="https://images-na.ssl-images-amazon.com/images/I/51MLPPvesNL.jpg"></img>`;
    priceString += `<img src ="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG37.png"></img>`;
    priceString += `</div>`
printToDom(priceString, 'cart');
}; 

export {addItemStringBuilder}