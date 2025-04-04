"use client";
import { useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

interface CheckboxProps {
    defaultChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
    text?: string;
}

export default function CustomCheckbox({
    defaultChecked = false,
    onChange,
    text = "",
}: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(defaultChecked)
    }, [])
    const handleClick = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="flex gap-1">
            <button
                onClick={handleClick}
                className={`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-all duration-300 outline-none 
            ${isChecked ? "border-blue-500 bg-blue-500" : "border-gray-400"}`}
            >
                {isChecked && (
                    <IoCheckmarkSharp className=" w-4 text-white" />
                )}

            </button>
            {text != "" && (
                <p  onClick={handleClick} className="cursor-default">{text}</p>
            )}
        </div>

    );
}