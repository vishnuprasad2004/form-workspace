
// individual form field interface
export interface FormField {
    id: string;
    name: string;
    label: string;
    type: "text" | "password" | "email" | "dropdown" | "checkbox" | "radio" | "textarea" | "number" | "date" | "select";
    placeholder?: string;
    required: boolean;
    options?: string[]; // for select, checkboxes and radio types
}

// form configuration interface
export interface FormConfig {
    name: String;
    description: String;
    fields: FormField[];
}
