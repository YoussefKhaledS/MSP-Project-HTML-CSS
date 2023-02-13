// open and close cart

let opencart = document.querySelector("#open-cart");
let cart = document.querySelector(".cart-items");
let closecart = document.querySelector("#close-cart");


opencart.addEventListener('click', function () {
    cart.classList.toggle('active');
})
closecart.addEventListener('click', function () {
    cart.classList.toggle('active');
})



//add product to cart 


let addcartbtn = document.getElementsByClassName('add-cart');
    for (let i = 0; i < addcartbtn.length; i++) {
        let btn = addcartbtn[i];
        btn.addEventListener('click', addcart_fun)
}

function addcart_fun() {
    let shopitem = this.parentElement;
    let title = shopitem.getElementsByClassName('title2')[0].innerText;
    let price = shopitem.getElementsByClassName('finalprice')[0].innerText
    let img = shopitem.getElementsByClassName('IMG')[0].src
    console.log(title,price,img);
    additemtocart_fun(title, price, img)
}

function additemtocart_fun(title, price, img) {
    let cart = document.createElement('div')
    let cartitems = document.getElementsByClassName('cart')[0]
    let cartcontent =`
    <div class="cart">
                <div class="content">

                    <div class="cart-box">
                        <img src="${img}">
                        <div class="details-box">
                            <div class="box-title">${title}</div>
                            <div class="price">${price}</div>
                        </div>

                        <i class='bx bxs-trash-alt remove'></i>
                    </div>
                </div>
            </div>
        `
        cart.innerHTML = cartcontent
    cartitems.append(cart)
}


let removeicons = document.getElementsByClassName('remove');
for (let i = 0; i < removeicons.length; i++) {
    let btn = removeicons[i];
    btn.addEventListener('click', function () {
        this.parentElement.remove();
    });
}



// loading

$(window).on("load",function(){
    $("body").css("overflow", "auto")
    $(".loading").fadeOut(1000)
})