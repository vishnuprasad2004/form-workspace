"use client";
import React, { useState } from "react";
import { FormConfig, FormField } from "@/lib/form.interfaces";
import TextField from "./TextField";
import RangeSlider from "./RangeSlider";
import RadioField from "./RadioField";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormProps {
    config: FormConfig;
    onSubmit: (formData: Record<string, any>) => void;
}
  

const DynamicForm:React.FC<FormProps> = ({ config, onSubmit }) => {

    const primaryColor = config.theme?.primary || "#111";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(e.target);
        console.log(e);
        
        
        onSubmit({});
    }

    return (
        <div>

            <h1 className="text-3xl text-white">{config.name}</h1>
            <p className="text-white">{config.description}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
                
                {config.fields.map((field: FormField) => {
                    
                    // for now the selection outline is stored here
                    const [isSelected, setIsSelected] = useState(false);
                    
                    // for the text based field like "text", "email", "password", "number"
                    if(field.type === "text" || field.type === "email" || field.type === "password" || field.type === "number") {
                        return (<>
                           <TextField 
                                key={field.id}
                                id={field.id}
                                label={field.label}
                                type={field.type}
                                name={field.name}
                                required={field.required}
                                placeholder={field.placeholder || ""}
                                primaryColor={primaryColor}

                           /> 
                        </>)
                    }

                    if(field.type === "checkbox") {
                        return (
                        <div className="w-96 text-xl p-2 pt-0 rounded-xl bg-neutral-200/50 duration-150">
                            <label htmlFor={field.name}>{field.label}</label>
                            {field.options?.map((option: string) => {
                                return (
                                    <div key={option}>
                                        <input type="checkbox" name={field.name} value={option} />
                                        <label htmlFor={option}>{option}</label>
                                    </div>
                                )
                            })}
                            <br/>
                        </div>
                        )
                    }

                    if(field.type === "range") {
                        return (
                            <>
                                <RangeSlider
                                    key={field.id} 
                                    id={field.id} 
                                    name={field.name} 
                                    label={field.label}
                                    min={field.min}
                                    max={field.max}
                                    required={field.required} 
                                    primaryColor={primaryColor}
                                />
                            </>
                        )

                    }

                    if(field.type === "radio") {
                        return (
                            <>
                               <RadioField
                                    key={field.id}
                                    id={field.id}
                                    name={field.name}
                                    label={field.label}
                                    options={field.options || []}
                                    required={field.required}
                                    primaryColor={primaryColor}
                               />
                            </>
                        )
                    }

                    if(field.type === "textarea") {
                        return (
                            <>
                                {/* <div className="w-96 text-xl p-2 pt-0 rounded-xl bg-neutral-200/50 duration-150">
                                    <label htmlFor={field.name}>{field.label}</label>
                                    <br/>
                                    <textarea 
                                        key={field.id} 
                                        name={field.name} 
                                        required={field.required} 
                                        placeholder={field.placeholder || ""} 
                                        className={`bg-transparent outline-none pl-2 pr-2 p-1 border-b-2 ${primaryColor}`}
                                    />
                                </div> */}


                            </>
                        )
                    }


                    if(field.type === "select") {
                        return (
                            // <div className="w-96 text-xl p-2 pt-0 rounded-xl bg-neutral-200/50 duration-150">
                            //     <label htmlFor={field.name}>{field.label}</label>
                            //     <select name={field.name} required={field.required} className="rounded-md">
                            //         {field.options?.map((option: string) => {
                            //             return (
                            //                 <option key={option} value={option}>{option}</option>
                            //             )
                            //         })}
                            //     </select>
                            // </div>
                            <Select>
                                <SelectTrigger className="w-[580px]">
                                    <SelectValue placeholder={field.label} />
                                </SelectTrigger>
                                <SelectContent>
                                    {field.options.map((option) => {
                                        return (<SelectItem value={option}>{option}</SelectItem>)
                                    })}
                                </SelectContent>
                            </Select>
                        )
                    }

                    if(field.type === "date") {
                        return (
                            <div className="w-96 text-xl p-2 pt-0 rounded-xl bg-neutral-200/50 duration-150">
                                <label htmlFor={field.name}>{field.label}</label>
                                <input type="date" name={field.name} required={field.required}/>
                            </div>
                        )

                    }
                    
                })}

                <button type="submit" className="bg-primary-500 text-white p-2 rounded-md">Submit</button>
            </form>
        </div>
    )

}


export default DynamicForm;