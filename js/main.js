const prodect = [
  {
    id: 0,
    image: "/img/airpods.jpg",
    title: "Apple AirPods",
    price: 25000,
  },
  {
    id: 1,
    image: "/img/apple14pro.jpg",
    title: "Apple i phone 14 pro",
    price: 125000,
  },
  {
    id: 2,
    image: "/img/applewatch8.jpg",
    title: "Apple watch 8",
    price: 28000,
  },
  {
    id: 3,
    image: "/img/oneplsu11R.jpg",
    title: "OnePlus11R",
    price: 44000,
  },
  {
    id: 4,
    image: "/img/samsungs23.jpg",
    title: "Samsung Galexy S23 Ultra ",
    price: 62000,
  },
];

const cat = [
  ...new Set(
    prodect.map((item) => {
      return item;
    })
  ),
];

const cartvalue = document.getElementById("count");
const cartitems = document.getElementById("cartItem");
const total = document.getElementById("total");
let i = 0;
let cart = [];

function addtocart(item) {
  console.log(item);
  cart.push(item);
  cartvalue.innerHTML = cart.length;
  i = i + item.price;
  total.innerText = i;
  carts();
}

function removecart(item, price) {
  cart = cart.filter((items) => items.id !== item);
  cartvalue.innerHTML = cart.length;
  i = i - price;
  total.innerText = i;
  carts();
}

function carts() {
  cartitems.innerHTML = cart
    .map((item) => {
      return `<div class="cartlist">
            <p> ${item.title}</p>
            <img class="cartimage"src="${item.image}"/>
            <p>${item.price}</p>
            <button onclick =removecart(${item.id},${item.price})>x</button>
            </div>`;
    })
    .join("");
}

document.getElementById("root").innerHTML = cat
  .map((item) => {
    var { image, title, price } = item;
    return `<div class='box'>
        <div class='img_box'>
            <img  class='img'  src=${image} ></img>
        </div>
        <div class='button'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>
            <button onclick='addtocart(${JSON.stringify(item)})'>add</button>
        </div>
    </div>`;
  })
  .join("");
