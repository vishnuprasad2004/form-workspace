"use client";


import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormConfig } from "@/lib/form.interfaces"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from "@/components/ui/index"
import React from "react";
import generateSchema from "@/utils/generateZod";
import { config } from "process";
import { z } from "zod";
import { randomUUID } from "crypto";
import Image from "next/image";




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
        <div className="mt-2 lg:w-1/2 w-full p-2 gap-5">
            <Card className="overflow-hidden h-28 mb-2 bg-primary">
                <Image src={"/header-pattern.jpg"} alt="header image" title="Header Image" width={100} height={100} className="w-[105%] "/>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-4xl">{config.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="font-semibold">{config.description}</CardDescription>
                </CardContent>
                <CardFooter className="font-bold text-xs">{config.createdAt.getDate() + " " + config.createdAt.getMonth() + " " + config.createdAt.getFullYear()}</CardFooter>
            </Card>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => { })} key={config.id} className="space-y-8 text-white pt-6 w-52">
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
                                                <Input type={field_.type} className="w-[250%]" placeholder={field_.placeholder || " "} {...field} />
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
                                                <Textarea className="lg:w-full" placeholder={field_.placeholder || " "} {...field} />
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

                        // if (field_.type === "radio") {
                        //     return (
                        //         <FormField
                        //             key={field_.id}
                        //             control={form.control}
                        //             name={field_.name}
                        //             render={({ field }) => (
                        //                 <FormItem>
                        //                     <FormLabel>{field_.label}</FormLabel>
                        //                     <FormControl>
                        //                         <RadioGroup
                        //                             value={field.value}
                        //                             onValueChange={(value) => field.onChange(value)}
                        //                         >
                        //                             {field_.options?.map((option: string) => (
                        //                                 <RadioGroupItem key={option} value={option}>
                        //                                     {option}
                        //                                 </RadioGroupItem>
                        //                             ))}
                        //                         </RadioGroup>
                        //                     </FormControl>
                        //                     <FormDescription>
                        //                         {field_.description || " "}
                        //                     </FormDescription>
                        //                     <FormMessage />
                        //                 </FormItem>
                        //             )}
                        //         />
                        //     );
                        // }


                        // if (field_.type == "checkbox") {
                        //     return (
                        //         <FormField
                        //             control={form.control}
                        //             name={field_.name}
                        //             render={() => (
                        //                 <FormItem>
                        //                     <FormLabel>{field_.name}</FormLabel>
                        //                     {field_.options?.map((option: string) => {
                        //                         return (
                        //                             <FormField
                        //                                 key={1}
                        //                                 control={form.control}
                        //                                 name={field_.name}
                        //                                 render={({ field }) => {
                        //                                     return (
                        //                                         <FormItem key={option} className="flex flex-row items-start space-x-3 space-y-0">
                        //                                             <FormControl>
                        //                                                 <Checkbox
                        //                                                     checked={field.value?.includes(option)}
                        //                                                     onCheckedChange={(checked) => {
                        //                                                         return checked
                        //                                                             ? field.onChange([...field?.value, option])
                        //                                                             : field.onChange(
                        //                                                                 field.value?.filter(
                        //                                                                     (value: string) => value !== option
                        //                                                                 )
                        //                                                             )
                        //                                                     }}
                        //                                                 />
                        //                                             </FormControl>
                        //                                             <FormLabel>{option}</FormLabel>
                        //                                         </FormItem>
                        //                                     )
                        //                                 }}
                        //                             >

                        //                             </FormField>
                        //                         )
                        //                     })}
                        //                     <FormDescription>
                        //                         {field_.description || " "}
                        //                     </FormDescription>
                        //                     <FormMessage />
                        //                 </FormItem>
                        //             )}
                        //         />
                        //     )
                        // }
                    })}

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
}

export default FormBuilder;