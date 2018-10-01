import {addItemStringBuilder} from './cart.js';

const addToCartButton = document.getElementById('addToCartButton');

const book  = {
  price : '$24.99'
};

const addToCartButtonEvent = () => {
  addItemStringBuilder();
}

addToCartButton.addEventListener('click', function (e) {
  addToCartButtonEvent();
});

export {book}
