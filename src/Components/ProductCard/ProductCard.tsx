import { StarSVG } from "@/SvgIcon/SvgIcon";
import { IoIosHeart } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
    product: {
        id: string;
        title: string;
        image: string;
        price: number;
        oldPrice?: number; // Optional
        rating: number;
        reviews: number;
        isOnSale: boolean;
        // more option will come here
    };
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className=" md:max-w-[238px]  border border-1 border-[#eee] mb-2.5 bg-white p-2.5 rounded-lg relative hover:shadow-lg duration-500 transition-all">
            {/* Ribbon */}
            {product.isOnSale && (
                <div className="absolute left-2.5 top-2.5 z-10">
                    <span className="sale-shop">Sale</span>
                </div>
            )}
            <button className="absolute right-2.5 top-2.5 z-10 bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center">
                <IoIosHeart className="w-4 h-4 text-black hover:text-red-600" />
            </button>
            <div className="aspect-square relative">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                />
            </div>
            <div className="pt-[15px] pb-2.5 space-y-1">
                {/* Ratings */}
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <StarSVG
                            key={i}
                            className={`w-5 h-5 ${i < product.rating ? "text-yellow-500" : "text-gray-300"
                                }`}
                        />
                    ))}
                    <span className="text-base text-[#232323] font-normal ml-1">
                        {product.reviews} Reviews
                    </span>
                </div>
                {/* Product Title */}
                <h3 className="font-medium text-lg leading-5 text-[#232323]">
                    {product.title}
                </h3>
                {/* Prices */}
                <div className="flex items-center gap-2">
                    <p className="text-xl leading-[38px] font-bold text-[#ffcc20]">
                        ${product.price.toFixed(2)}
                    </p>
                    {product.oldPrice && (
                        <p className="text-[15px] font-medium text-[#a3a3a3] line-through">
                            ${product.oldPrice.toFixed(2)}
                        </p>
                    )}
                </div>
                {/* Shop Now Button */}
                <div className="pt-5 pb-2.5 border-t border-[#eee]">
                    <Link
                        href={`/products/${product.id}`}
                        className="w-full inline-block bg-[#ffcc20] text-black py-2.5 px-5 rounded-[5px] font-normal text-center text-lg leading-5 transition-colors border border-[#ffcc20] hover:bg-black hover:text-white duration-300 hover:border-black"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
