"use client";

import { useDispatch } from "react-redux";

import ReusableModal from "@/Components/Common/ReuseModal/ReuseModal";
import { openModal } from "@/Redux/features/modal/modalSlice";

export default function ExamplePage() {
    const dispatch = useDispatch();

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
        </div>
    );
}
