"use client";

import Dropdown from "@/Components/Common/DropDown/DropDown";

import HeroProducts from "@/Components/HomeHero/HeroProducts/HeroProducts";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { Button } from "@/Components/ui/button";
import { toggleDropdown } from "@/Redux/features/dropDown/dropDownSlice";
import { useAppDispatch } from "@/Redux/store/hooks";
import { products } from "@/data/data";
import Link from "next/link";
import ReusableModal from "@/Components/Common/ReuseModal/ReuseModal";
import { openModal } from "@/Redux/features/modal/modalSlice";


export default function ExamplePage() {
    
    const dispatch = useAppDispatch();

    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];



    return (
        <div className=" container mx-auto min-h-screen py-5">
            <button
                onClick={() => dispatch(openModal("testModal"))}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Open Modal
            </button>

            <p>
                Share this link to open the modal directly:
                <a href="?modal=testModal" className="text-blue-600 underline ml-2">
                    Open Modal Link
                </a>
            </p>

            <ReusableModal className=" max-w-[800px] h-[500px]  p-4 bg-white rounded-md border">
                <div className=" w-full">
                    <h2 className="text-lg font-semibold">Modal Content</h2>
                    <p>This is the content of the reusable modal.</p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem illum. Consequuntur, doloribus quasi exercitationem animi voluptates sapiente? Assumenda, iste similique? Dolore, rerum. Ullam doloremque atque unde veritatis debitis nesciunt.</p>
                </div>
            </ReusableModal>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, mollitia obcaecati alias corrupti dolore delectus magnam debitis? Labore eius reprehenderit mollitia possimus facilis nisi, ab veniam, itaque soluta unde consequatur.</p>

            <HeroProducts></HeroProducts>
            <div className="bg-gray-50  flex gap-3 flex-wrap">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>


            {/* Dropdown with External Button */}
            <Button onClick={() => dispatch(toggleDropdown("dropdown1"))} className="bg-blue-500 text-white">
                Open Dropdown 1
            </Button>

            <Dropdown
                id="dropdown1"
                trigger={<Button className="bg-gray-500">Dropdown Trigger</Button>}
                menuClassName="w-[500px]"
            >
                <ul className="space-y-2">
                    {options.map((option) => (
                        <Link href={'/about'}> <li onClick={() => dispatch(toggleDropdown(''))} key={option.value} className="p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                            {option.label}
                        </li></Link>
                    ))}
                </ul>
            </Dropdown>


            
        </div>
    );
}
