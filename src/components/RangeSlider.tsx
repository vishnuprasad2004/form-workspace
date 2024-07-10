"use client";

import React from "react";


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
    return (
        <div>
            <label htmlFor={name}>{label + " "}</label>
            <input type="range" id={id} name={name} required={required} min={min} max={max} className="accent-orange-600"/>
        </div>
    );
};

export default RangeSlider;