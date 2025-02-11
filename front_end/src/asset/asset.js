// Importing Assets
import logo from './logo.jpg';
import cart from './cart.png';
import bankuTilapia from './banku-tilapia.jpg';
import jollof from './jollof-rice.jpg';
import shawama from './chicken-shawarma.jpg';
import friedRice from './fried-rice.jpg';
import juice from './fruit-juice.jpg';
import fufu from './fufu-light-soup.jpg';
import indomie from './indomie-special.jpg';
import pizza from './pizza-slice.jpg';
import vegetarian from './vegetarian-salad.jpg';
import waakye from './waakye-special.jpg';
import foodShop1Image from "./foodVender1.jpg";
import foodShop2Image from "./foodshop2.jpg";
import rating from "./rating.png";
//import foodShop3Image from "./foodshop3.jpg"; // Example for variety

// Assets object
const asset = {
    logo,
    cart,
    rating
};

// Store List
export const storeList = [
    {
        id: 1,
        name: "Food Shop 1",
        description: "Delicious local dishes served hot.",
        image: foodShop1Image,
        address: "123 Food Street, Accra",
        contact: "+233 24 123 4567",
        openingHours: "8:00 AM - 8:00 PM",
        price:"$20",
        items: [
          { 
              name: "Waakye", 
              price:12 , 
              description: "Traditional waakye with egg, shito, meat, and a side of fish.",
              image: waakye,
              
          },
          { 
              name: "Banku & Tilapia", 
              price: 18, 
              description: "Grilled tilapia served with spicy banku.",
              image: bankuTilapia,
          },
          { 
              name: "Banku & Tilapia", 
              price: 18, 
              description: "Grilled tilapia served with spicy banku.",
              image: bankuTilapia,
          },
          { 
              name: "Banku & Tilapia", 
              price: 18 , 
              description: "Grilled tilapia served with spicy banku.",
              image: bankuTilapia,
          },
          { 
              name: "Banku & Tilapia", 
              price: 18, 
              description: "Grilled tilapia served with spicy banku.",
              image: bankuTilapia,
          },
          { 
              name: "Banku & Tilapia", 
              price: 18, 
              description: "Grilled tilapia served with spicy banku.",
              image: bankuTilapia,
          },
          { 
              name: "Banku & Tilapia", 
              price: 18, 
              description: "Grilled tilapia served with spicy banku.",
              image: bankuTilapia,
          },
      ]
    },
    {
        id: 2,
        name: "Food Shop 2",
        description: "Specialized in continental dishes.",
        image: foodShop2Image,
        address: "456 Gourmet Lane, Tema",
        contact: "+233 54 987 6543",
        openingHours: "9:00 AM - 10:00 PM",
        price:"$20",
        items: [
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },

            
        ]
    },
    {
        id: 3,
        name: "Food Shop 3",
        description: "Specialized in continental dishes.",
        image: foodShop2Image,
        address: "456 Gourmet Lane, Tema",
        contact: "+233 54 987 6543",
        openingHours: "9:00 AM - 10:00 PM",
        price:"$20",
        items: [
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },

        ]
    },
    {
        id: 4,
        name: "Food Shop 4",
        description: "Specialized in continental dishes.",
        image: foodShop2Image,
        address: "456 Gourmet Lane, Tema",
        contact: "+233 54 987 6543",
        openingHours: "9:00 AM - 10:00 PM",
        price:"$20",
        items: [
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },

        ]
    },
    {
        id: 5,
        name: "Food Shop 5",
        description: "Specialized in continental dishes.",
        image: foodShop2Image,
        address: "456 Gourmet Lane, Tema",
        contact: "+233 54 987 6543",
        openingHours: "9:00 AM - 10:00 PM",
        price:"$20",
        items: [
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },

        ]
    },
    {
        id: 6,
        name: "Food Shop 6",
        description: "Specialized in continental dishes.",
        image: foodShop2Image,
        address: "456 Gourmet Lane, Tema",
        contact: "+233 54 987 6543",
        openingHours: "9:00 AM - 10:00 PM",
        
        items: [
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },

        ]
    },
   
    {
        id: 7,
        name: "Food Shop 7",
        description: "Home of healthy and organic meals.",
        image: foodShop2Image,
        address: "789 Fresh Market, Kumasi",
        contact: "+233 20 456 7890",
        openingHours: "7:00 AM - 9:00 PM",
        price:"$20",
        items: [
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },
          {
            name: "Pasta Alfredo",
            price: 20,
            description: "Creamy pasta served with grilled chicken.",
            image: friedRice, // Assuming the same image is used
        },

        ]
    }
];

export const menuList = [
    {
      id: 1,
      name: "Indomie Special",
      description: "Delicious noodles cooked with vegetables, spices, and grilled chicken.",
      price: 20,
      image: indomie,
    },
    {
      id: 2,
      name: "Jollof Rice",
      description: "Perfectly cooked jollof rice served with fried chicken and salad.",
      price: 20,
      image: jollof
    },
    {
      id: 3,
      name: "Fried Rice",
      description: "Tasty fried rice with eggs, chicken, and a side of coleslaw.",
      price: 20,
      image: friedRice,
    },
    {
      id: 4,
      name: "Banku and Tilapia",
      description: "Local favorite of grilled tilapia served with spicy banku.",
      price: 20,
      image: bankuTilapia
    },
    {
      id: 5,
      name: "Waakye Special",
      description: "Traditional waakye with egg, shito, meat, and a side of fish.",
      price: 20,
      image: waakye,
    },
    {
      id: 6,
      name: "Vegetarian Salad",
      description: "Freshly made salad with a variety of vegetables and light dressing.",
      price: 20,
      image:vegetarian,
    },
    {
      id: 7,
      name: "Pizza Slice",
      description: "Hot and cheesy pizza slice with a choice of toppings.",
      price: "GH₵15",
      image: pizza,
    },
    {
      id: 8,
      name: "Fufu with Light Soup",
      description: "Traditional fufu served with goat meat light soup.",
      price: "GH₵38",
      image: fufu,
    },
    {
      id: 9,
      name: "Chicken Shawarma",
      description: "Juicy chicken shawarma wrap with salad and a tangy garlic sauce.",
      price: 20,
      image: shawama,
    },
    {
      id: 10,
      name: "Fruit Juice",
      description: "Freshly squeezed juice with no added sugar. Choice of mango, orange, or pineapple.",
      price: 20,
      image:juice,
    },
  ];
  

// Create a flat list of all store items
export const storeItems = storeList.flatMap(store =>
    store.items.map((item, index) => ({
        id: `${store.id}-${index}`, // Unique ID combining store ID and item index
        name: item.name,
        description: store.description,
        price: item.price,
        image: store.image,
        rating: item.rating
    }))
);


export default asset;
