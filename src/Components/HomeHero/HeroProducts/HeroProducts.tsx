'use client'

import React from "react";
import dynamic from "next/dynamic";
import HeroProductCardSkeleton from "./HeroProductCard/HeroProductCardSkeleton";

// Import the skeleton for the card

// Dynamically import the HeroProductCard component
const HeroProductCard = dynamic(() => import("./HeroProductCard/HeroProductCard"), {
    ssr: false, // Disable server-side rendering if not needed
    loading: () => <HeroProductCardSkeleton />, // Show the skeleton while loading
});

function HeroProducts() {
    const products = [
        {
            title: "Modern King Sized Wooden Bed",
            category: "Furniture",
            image: "/images/HeroProducts/furniture.png",
        },
        {
            title: "Stretchable Woolen Shirt for Men",
            category: "Clothing",
            image: "/images/HeroProducts/t-shirt.png",
        },
        {
            title: "Peach Moisturizing Lip Balm",
            category: "Accessories",
            image: "/images/HeroProducts/lip.png",
        },
    ];

    return (
        <div className="bg-yellow-50 p-20 flex gap-3 flex-wrap">
            {products.map((product, index) => (
                <HeroProductCard key={index} item={product} />
            ))}
        </div>
    );
}

export default HeroProducts;
