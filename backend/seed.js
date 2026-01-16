require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    const products = [
{
  name: "iPhone 15",
  price: 90000,
  description: "Latest Apple iPhone",
  image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
  category: "Mobiles",
  countInStock: 5
},
{
  name: "Samsung Galaxy S24",
  price: 85000,
  description: "Samsung flagship smartphone",
  image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
  category: "Mobiles",
  countInStock: 6
},
{
  name: "OnePlus 12",
  price: 70000,
  description: "Fast and smooth Android phone",
  image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=600",
  category: "Mobiles",
  countInStock: 4
},
{
  name: "MacBook Air M2",
  price: 110000,
  description: "Apple laptop M2 chip",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
  category: "Laptops",
  countInStock: 3
},
{
  name: "Dell XPS Laptop",
  price: 90000,
  description: "Powerful Windows laptop",
  image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/portfolio/laptop-promo-above-dell-pro.png?fmt=png-alpha&wid=800&hei=640",
  category: "Laptops",
  countInStock: 4
},
{
  name: "HP Pavilion",
  price: 65000,
  description: "Affordable performance laptop",
  image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600",
  category: "Laptops",
  countInStock: 5
},
{
  name: "Wireless Headphones",
  price: 5000,
  description: "Noise cancelling headphones",
  image: "https://media.gettyimages.com/id/1266839756/photo/wireless-bluetooth-headphones.jpg?s=612x612&w=0&k=20&c=lVQH7yGwmSXomMPxkCFeWNETO2Yz4a0rR-dYv-miT2U=",
  category: "Accessories",
  countInStock: 8
},
{
  name: "Bluetooth Speaker",
  price: 3000,
  description: "Portable speaker",
  image: "https://images-eu.ssl-images-amazon.com/images/I/711TYHRngsL._AC_UL300_SR300,200_.jpg",
  category: "Accessories",
  countInStock: 10
},
{
  name: "Smart Watch",
  price: 4000,
  description: "Fitness smart watch",
  image: "https://media.gettyimages.com/id/486428468/photo/heart-rate-information-sits-on-the-face-of-a-samsung-gear-s2-smartwatch-at-the-samsung.jpg?s=612x612&w=0&k=20&c=r7SJHz7l04odYAEdte05RcRanCaF5TjeVdNjTWByy0U=",
  category: "Wearables",
  countInStock: 7
},
{
  name: "Apple Watch",
  price: 25000,
  description: "Apple smartwatch",
  image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
  category: "Wearables",
  countInStock: 3
},
{
  name: "DSLR Camera",
  price: 60000,
  description: "Professional DSLR camera",
  image: "https://static.vecteezy.com/system/resources/thumbnails/049/414/111/small/a-sleek-dslr-camera-resting-against-a-vibrant-orange-backdrop-showcasing-its-detailed-features-and-craftsmanship-free-photo.jpeg",
  category: "Cameras",
  countInStock: 2
},
{
  name: "Gaming Mouse",
  price: 1500,
  description: "High precision gaming mouse",
  image: "https://kreo-tech.com/cdn/shop/files/HawkPDPwebsite.1128.png?v=1759329618&width=600",
  category: "Accessories",
  countInStock: 12
},
{
  name: "Mechanical Keyboard",
  price: 3500,
  description: "RGB mechanical keyboard",
  image: "https://m.media-amazon.com/images/I/41IAgvZTPoL.jpg",
  category: "Accessories",
  countInStock: 6
},
{
  name: "Redmi note 12",
  price: 12000,
  description: "Smart phone",
  image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
  category: "Accessories",
  countInStock: 9
},
{
  name: "Gaming Chair",
  price: 12000,
  description: "Comfortable gaming chair",
  image: "https://m.media-amazon.com/images/I/81m8UW1VGoL.jpg",
  category: "Furniture",
  countInStock: 2
},
];


    await Product.insertMany(products);
    console.log("Products added successfully!");
    process.exit();
  })
  .catch(err => console.log(err));
