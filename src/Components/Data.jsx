// import React, { useEffect, useState } from 'react'
import womenGown from '../Assets/womenGown.png'
import womenGown2 from '../Assets/womenGown2.png'
import womenTravelBag from '../Assets/womenTravelBag.png'
import womenShoe from '../Assets/womenShoe.png'
import menShoe from '../Assets/menShoe.png'
import menWatch from '../Assets/menWatch.png'
import menCasual from '../Assets/menCasual.png'
import menSuit from '../Assets/menSuit.png'
import kidsGreyShirt from '../Assets/kidsGreyShirt.png'
import kidsHat from '../Assets/kidsHat.png'
import kidsSneakers from '../Assets/kidsSneakers.png'

// const productData = async () => {
//     const [productList, setProductList] = useState([]);

//     const getAllProducts = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/getAllProducts', {
//                 method: 'GET',
//             });
//             const data = await response.json();
//             setProductList(data.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     useEffect(() => {
//         getAllProducts();
//     }, []);

//     return productList
//  }

let productData = [
    {
        id: 1,
        name: "WOMEN GOWN.",
        image: womenGown,
        newPrice: 50.00,
        oldPrice: 80.50,
        category: "women"
    },
    {
        id: 2,
        name: "WOMEN GOWN",
        image:womenGown2,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "women",
    },
    {
        id: 3,
        name: "TRAVELING BAG",
        image:womenTravelBag,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "women",
    },
    {
        id: 4,
        name: "NICE SHOE FOR LADIES",
        image:womenShoe,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "women",
    },
    {
        id: 5,
        name: "NICE MALE SHOE.",
        image:menShoe,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "men",
    },
    {
        id: 6,
        name: "CASUAL WEAR FOR GUYS",
        image:menCasual,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "men",
    },
    {
        id: 7,
        name: "CORPORATE OFFICE SUIT",
        image:menSuit,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "men",
    },
    {
        id: 8,
        name: "CLASSY WRISTWATCH.",
        image:menWatch,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "men",
    },
    {
        id: 9,
        name: "GREY T-SHIRT FOR KIDS.",
        image:kidsGreyShirt,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "kids",
    },
    {
        id: 10,
        name: "NICE KIDS'HAT.",
        image:kidsHat,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "kids",
    },
    {
        id: 11,
        name: "COOL BABY SNEAKERS.",
        image:kidsSneakers,
        newPrice: 150.00,
        oldPrice: 280.50,
        category: "kids",
    }
    
]

export default productData