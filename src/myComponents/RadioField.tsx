"use client";
import React from "react";


interface RadioFieldProps {
    id: string;
    label: string;
    name: string;
    options: string[];
    required: boolean;
    primaryColor: string;

}

const RadioField: React.FC<RadioFieldProps> = ({id, name, label, options, required}) => {
    const length = options.length;
    return (
        <div className="w-96 text-xl p-2 pt-0  rounded-xl bg-neutral-200/50 duration-150">
            <label htmlFor={name}>{label}</label>
            <div className="flex">

                {options?.map((option: string) => {
                    return (
                        <div key={option}>
                            <input type="radio" name={name} value={option} required={required}/>
                            <label htmlFor={option}>{option}</label>
                        </div>
                    )
                })}
            </div>
            <br/>
        </div>
    );
};

export default RadioField;