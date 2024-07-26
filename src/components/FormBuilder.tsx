"use client";


import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormConfig } from "@/lib/form.interfaces"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calendar, Checkbox, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from "@/components/ui/index"
import React from "react";
import generateSchema from "@/utils/generateZod";
import { config } from "process";
import { z } from "zod";
import { randomUUID } from "crypto";




interface FormProps {
    config: FormConfig;
    // onSubmit: (formData: Record<string, any>) => void;
}

const FormBuilder: React.FC<FormProps> = ({ config }) => {

    const formSchema = generateSchema(config);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //     username: "",
        // },
    });

    // // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <>
            <h1 className="text-3xl text-white">{config.name}</h1>
            <h2 className="text-white">{config.description}</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => { })} key={config.id} className="space-y-8 text-white pt-6">
                    {config.fields.map((field_) => {

                        if (field_.type === "text" || field_.type === "email" || field_.type === "password") {
                            return (
                                <FormField
                                    key={field_.id}
                                    control={form.control}
                                    name={field_.name}
                                    render={({ field }) => (
                                        <FormItem
                                            key={field_.id}
                                        >
                                            <FormLabel>{field_.label}</FormLabel>
                                            <FormControl>
                                                <Input type={field_.type} placeholder={field_.placeholder || " "} {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                {field_.description || " "}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        }

                        if (field_.type === "textarea") {
                            return (
                                <FormField
                                    key={field_.id}
                                    control={form.control}
                                    name={field_.name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{field_.label}</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder={field_.placeholder || " "} {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                {field_.description || " "}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        }

                        if (field_.type === "number") {
                            return (
                                <FormField
                                    control={form.control}
                                    name={field_.name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{field_.label}</FormLabel>
                                            <FormControl>
                                                <Input type="number" min={field_.min} max={field_.max} placeholder={field_.placeholder || " "} {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                {field_.description || " "}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )

                        }

                        if (field_.type == "checkbox") {
                            return (
                                <FormField
                                    control={form.control}
                                    name={field_.name}
                                    render={() => (
                                        <FormItem>
                                            <FormLabel>{field_.name}</FormLabel>
                                            {field_.options?.map((option: string) => {
                                                return (
                                                    <FormField
                                                        key={1}
                                                        control={form.control}
                                                        name={field_.name}
                                                        render={({ field }) => {
                                                            return (
                                                                <FormItem key={option} className="flex flex-row items-start space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <Checkbox
                                                                            checked={field.value?.includes(option)}
                                                                            onCheckedChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field?.value, option])
                                                                                    : field.onChange(
                                                                                        field.value?.filter(
                                                                                            (value: string) => value !== option
                                                                                        )
                                                                                    )
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                    <FormLabel>{option}</FormLabel>
                                                                </FormItem>
                                                            )
                                                        }}
                                                    >

                                                    </FormField>
                                                )
                                            })}
                                            <FormDescription>
                                                {field_.description || " "}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        }
                    })}

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    );
}

export default FormBuilder;