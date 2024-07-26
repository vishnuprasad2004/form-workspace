import { FormConfig } from "@/lib/form.interfaces";
import { z, ZodType } from "zod";

const generateSchema = (config: FormConfig) => {
    const shape: Record<string, ZodType<any>> = {}; // Dynamic shape for the zod schema

    config.fields.forEach((field) => {
        let schema: ZodType<any>; // Initialize schema variable

        // Define the schema based on the field type
        switch (field.type) {

            
            case "text":
                schema = z.string()
                    .optional()
                break;

            case "textarea":
                schema = z.string()
                    .min(field.min || 0, { message: `${field.label} must be at least ${field.min || 0} characters long` })
                    .max(field.max || Number.MAX_SAFE_INTEGER, { message: `${field.label} must be at most ${field.max || Number.MAX_SAFE_INTEGER} characters long` })
                    .optional()
                // Add optional validation if the field is not required
                // if(!field.required) {
                //     schema.optional()
                // }
                break;


            case "number":
                schema = z.number()
                    .gte(field.min || 0, `${field.label} must be at least ${field.min || 0}`)
                    .lte(field.max || Number.MAX_SAFE_INTEGER, `${field.label} must be at most ${field.max || Number.MAX_SAFE_INTEGER}`);
                // Add optional validation if the field is not required
                if(!field.required) {
                    schema.optional()
                }    
                break;


            case "email":
                schema = z.string().email("Invalid email address").min(2, "Email must be at least 2 characters long");
                // Add optional validation if the field is not required
                if(!field.required) {
                    schema.optional()
                }
                break;


            case "password":
                schema = z
                    .string()
                    .min(6, "Password must be at least 6 characters long");
                // Add optional validation if the field is not required
                if(!field.required) {
                    schema.optional()
                }
                break;


            case "date":
                schema = z.string().date()
                // Add optional validation if the field is not required
                if(!field.required) {
                    schema.optional()
                }
                break;


            case "select":
                schema = z.string()
                break;


            case "radio":
                schema = z.string()
                break;


            case "checkbox":
                schema = z.array(z.string()).refine((value) => value.some((item) => item), {
                    message: "You have to select at least one item.",
                })
                // if (field.required) {
                //     schema = schema.refine(
                //         (val) => val === true,
                //         `${field.label} is required`
                //     );
                // }
                break;


            default:
                schema = z.string().optional();
        }

        shape[field.name] = schema; // Add the schema to the shape object
    });
    // console.log(z.object(shape));
    
    return z.object(shape); // Return the zod schema object
};

export default generateSchema; // Export the function to be used in other files