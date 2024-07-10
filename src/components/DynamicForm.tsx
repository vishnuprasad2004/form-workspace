"use client";
import React, { useState } from "react";
import { FormConfig, FormField } from "@/lib/form.interfaces";

interface FormProps {
    config: FormConfig;
    onSubmit: (formData: Record<string, any>) => void;
}
  

const DynamicForm:React.FC<FormProps> = ({ config, onSubmit }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({});
    }

    return (
        <div>

            <h1 className="text-3xl">{config.name}</h1>
            <p>{config.description}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
                {config.fields.map((field: FormField) => {
                    
                    // for now the selection outline is stored here
                    const [isSelected, setIsSelected] = useState(false);
                    
                    // for the text based field like "text", "email", "password", "number"
                    if(field.type === "text" || field.type === "email" || field.type === "password" || field.type === "number") {
                        return (<>
                            <div 
                                className={"min-w-32 p-2 rounded-md bg-neutral-800 duration-150" /* + (isSelected ? " border-2 border-primary-500" : "") */}
                                >
                                <label htmlFor={field.name} className="text-xs">{field.label+ " "}</label>
                                <br/>
                                <input 
                                    key={field.id} 
                                    type={field.type} 
                                    name={field.name} 
                                    placeholder={field.placeholder || ""} 
                                    required={field.required} 
                                    className="bg-transparent outline-none pl-2 pr-2 p-1"
                                    onFocus={() => {setIsSelected(!isSelected)}}
                                /> 
                            </div>
                        </>)
                    }

                    if(field.type === "checkbox") {
                        return (<>
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
                        </>)
                    }



                    
                })}
            </form>
        </div>
    )

}


export default DynamicForm;