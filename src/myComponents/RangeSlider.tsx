"use client";

import React, { useState } from "react";


interface RangeSliderProps {
    id: string;
    label: string;
    name: string;
    min: number;
    max: number;
    required: boolean;
    primaryColor: string;

}

const RangeSlider: React.FC<RangeSliderProps> = ({id, label, name, min, max, required, primaryColor}) => {
    const [value, setValue] = useState(0); 
    const MAX = max; 
    const getBackgroundSize = () => { 
    return { backgroundSize: `${(value * 100) / MAX}% 100%` }; }; 
    
    return (
        <div className="w-96 text-xl p-2 pt-0  rounded-xl bg-neutral-200/50 duration-150 " >
            <label htmlFor={name}>{label + " " + value}</label>
            <input type="range" id={id} name={name} required={required} min={min} max={max} onChange={(e) => setValue(Number(e.target.value))} style={getBackgroundSize()} value={value}  className="accent-orange-600"/>
        </div>
    );
};

export default RangeSlider;