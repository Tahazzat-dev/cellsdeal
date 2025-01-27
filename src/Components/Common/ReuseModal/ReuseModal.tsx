"use client";

import { Dialog, DialogContent, DialogTitle } from "@/Components/ui/dialog";
import { closeModal, openModal } from "@/Redux/features/modal/modalSlice";
import { useAppSelector } from "@/Redux/store/hooks";
import { RootState } from "@/Redux/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const ReusableModal = ({ children, className }: { className?: string, children: React.ReactNode }) => {
    const { isOpen, modalKey } = useAppSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const router = useRouter();
    useEffect(() => {
        const modalKeyFromURL = searchParams.get("modal");
        if (modalKeyFromURL) {
            dispatch(openModal(modalKeyFromURL)); // Open modal based on URL
        }
    }, [searchParams, dispatch]);


    const handleClose = () => {
        dispatch(closeModal());
        const params = new URLSearchParams(searchParams.toString());
        params.delete("modal"); // Remove "modal" from the query string
        router.push(`?${params.toString()}`, { scroll: true }); // Update the URL
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>

            <DialogContent className={className}>
                {/* // This is only need for render no need to provide the title */}
                <DialogTitle></DialogTitle> 
                
                {children}

            </DialogContent>
        </Dialog>
    );
};

export default ReusableModal;
