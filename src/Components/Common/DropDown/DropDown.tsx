// components/Dropdown.tsx
"use client";

import { Popover, PopoverTrigger, PopoverContent } from "@/Components/ui/popover";
import clsx from "clsx";
import { toggleDropdown } from "@/Redux/features/dropDown/dropDownSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/store/hooks";
import { ReactNode } from "react";

interface DropdownProps {
    id: string;
    children: ReactNode;
    trigger: ReactNode; // Accept any button or custom trigger
    menuClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ id, children, trigger, menuClassName }) => {
    const dispatch = useAppDispatch();
    const dropdownState = useAppSelector((state) => state.dropdown[id]) || { isOpen: false };

    return (
        <Popover open={dropdownState.isOpen} onOpenChange={() => dispatch(toggleDropdown(id))}>
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent className={clsx(" bg-white shadow-lg rounded-md", menuClassName)}>
                {children}
            </PopoverContent>
        </Popover>
    );
};

export default Dropdown;
