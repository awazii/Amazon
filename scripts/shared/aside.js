import { cartcount } from "../utils/cartcount.js"
export function aside (page){
let aside =document.querySelector(".aside")
document.querySelector(".asideicon").addEventListener("click",()=>{
  aside.innerHTML=`<div class="asidecontent">
        <a class="cart-link header-link" href="checkout.html">
          <img class="cart-icon" src="images/icons/cart-icon.png">
          <div class="cart-quantity">${cartcount()}</div>
          <div class="cart-text">Cart</div>
        </a>
        ${page===3?``:`<a class="orders-link header-link" href="orders.html">
          <span class="returns-text">Returns</span>
          <span class="orders-text">& Orders</span>
        </a>`} 
        <div class="revert">
          <button class="revert-button"><img src="images/icons/back.png" alt=""></button>
          <h3>Back</h3>
        </div>
      </div>
    </div>`
    aside.style.transform="translateX(0px)"
    revert()
    cartcount()
})
function revert(){
  console.log("called")
  document.querySelector(".revert").addEventListener("click",()=>{
    aside.innerHTML=``
    aside.style.transform="translateX(110px)"
    console.log("called button")
  })
}
}