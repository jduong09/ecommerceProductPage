document.addEventListener('DOMContentLoaded', () => {
  const cartAmount = document.querySelector('.product-cart span');
  const minusIcon = document.getElementById('minus-icon');
  const plusIcon = document.getElementById('plus-icon');
  const cartInventory = document.getElementById('shopping-cart-inventory');
  const shoppingCartBtn = document.getElementById('header-shopping-cart-btn');
  const shoppingCart = document.getElementById('shopping-cart');

  const cartId = document.createElement('span');
  cartId.id = 'cart-id';

  shoppingCartBtn.addEventListener('click', () => {
    if (shoppingCart.classList.contains('hide')) {
      shoppingCart.classList.remove('hide');
    } else {
      shoppingCart.classList.add('hide');
    }
  });
 
  let newCartAmount = 0;
  let submittedCart = 0;
  minusIcon.addEventListener('click', (e) => {
    e.preventDefault();

    newCartAmount = newCartAmount === 0 ? 0 : newCartAmount - 1;

    cartAmount.innerHTML = newCartAmount;
  });

  plusIcon.addEventListener('click', (e) => {
    e.preventDefault();
    
    newCartAmount = newCartAmount + 1;

    cartAmount.innerHTML = newCartAmount;
  });

  const cartButton = document.querySelector('.product-cart button');

  cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    const shoesQuantity = parseInt(cartAmount.innerHTML);

    submittedCart += shoesQuantity;

    const cartItemContainer = document.createElement('div');
    cartItemContainer.classList.add('cart-filled');

    const cartItemThumbnail = document.createElement('img');
    cartItemThumbnail.src = './images/image-product-1-thumbnail.jpg';
    cartItemThumbnail.id = 'cart-item-thumbnail';

    const cartItemName = document.createElement('div');
    cartItemName.innerHTML = 'Autumn Limited Edition...';
    cartItemName.classList.add('cart-item-name');

    const cartItemPriceContainer = document.createElement('div');
    cartItemPriceContainer.classList.add('cart-item-price-container');
    cartItemPriceContainer.innerHTML = `$125.00 x ${shoesQuantity}`;

    const cartItemTotal = document.createElement('span');
    cartItemTotal.innerHTML = `$${(125.00 * shoesQuantity).toFixed(2)}`;
    cartItemTotal.id = 'cart-item-total';

    cartItemPriceContainer.append(cartItemTotal);

    const cartItemDeleteBtn = document.createElement('button');
    const cartItemDeleteImg = document.createElement('img');
    cartItemDeleteImg.src = './images/icon-delete.svg';
    cartItemDeleteImg.id = 'cart-icon-delete';
    cartItemDeleteBtn.append(cartItemDeleteImg);

    cartItemContainer.append(cartItemThumbnail, cartItemName, cartItemPriceContainer, cartItemDeleteBtn);
    cartInventory.innerHTML = '';
    cartInventory.append(cartItemContainer);
    cartInventory.classList.add('filled');

    cartId.innerHTML = submittedCart;
    shoppingCartBtn.append(cartId);

    cartItemDeleteBtn.addEventListener('click', (e) => {
      e.preventDefault();

      cartId.innerHTML = '';
      submittedCart = 0;

      const shoppingCartInventory = e.target.parentElement.parentElement.parentElement;

      shoppingCartInventory.children[0].remove();
      shoppingCartInventory.children[0].remove();

      shoppingCartInventory.innerHTML = 'Your cart is empty.';
      shoppingCartInventory.classList.remove('filled');
      
    });

    // Need checkout button.
    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('cart-button');
    checkoutButton.innerHTML = 'Checkout';

    cartInventory.append(checkoutButton);
  });
});