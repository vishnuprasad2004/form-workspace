"use client";
import React from "react";

interface TextFieldProps {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required: boolean;
    primaryColor: string;
}

const TextField: React.FC<TextFieldProps> = ({ id, type, name, label, placeholder, required, primaryColor }: any) => {
    return (
        <div 
            // for changing UI ... can change here
            className={"w-96 text-xl p-2 pt-0  rounded-xl bg-neutral-200/50 duration-150" /* + (isSelected ? " border-2 border-primary-500" : "") */}
            >
            <label htmlFor={name} className="text-xs font-semibold">{label+ " "}</label>
            <br/>
            <input 
                key={id} 
                type={type} 
                name={name} 
                placeholder={placeholder || ""} 
                required={required} 
                className={`bg-transparent outline-none pl-2 pr-2 p-1 border-b-2 ${primaryColor}`}
                // onFocus={() => {setIsSelected(!isSelected)}}
            /> 
        </div>
    )
}


export default TextField
