
// individual form field interface
export interface FormField {
    id: string;
    name: string;
    label: string;
    type: "text" | "password" | "email" | "dropdown" | "checkbox" | "radio" | "textarea" | "number" | "date" | "select" | "range";
    placeholder?: string;
    required: boolean;
    options?: string[]; // for select, checkboxes and radio types
    // min and max values are for range input type
    min?: number;
    max?: number;
}

// form configuration interface
export interface FormConfig {
    name: String;
    description: String;
    theme?: {
        primary: string;
    };
    fields: FormField[];
}
