"use client";
import DynamicForm from "@/components/DynamicForm";
import { FormConfig } from "@/lib/form.interfaces";
import React, { useState } from "react";

const formConfig: FormConfig = {
  name: "User Registration",
  description: "Register a new user",
  theme: {
    primary: "#111",
  },
  fields: [
    {
      id: "1",
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
    },
    {
      id: "2",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      id: "3",
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      id: "4",
      name: "gender",
      label: "Gender",
      type: "radio",
      options: ["Male", "Female", "Others"],
      required: true,
    },
    {
      id: "5",
      name: "dob",
      label: "Date of Birth",
      type: "date",
      required: true,
    },
    {
      id: "6",
      name: "terms",
      label: "I agree to the terms and conditions",
      type: "checkbox",
      required: true,
    },
    {
      id: "7",
      name: "feedback",
      label: "Feedback",
      type: "range",
      required: true,
    }
  ]
};

export default function Form({ params }:any) {

  return (
    <div className={`flex justify-center w-full h-screen`} style={{backgroundColor: formConfig.theme.primary, color: formConfig.theme?.primary}}>
      <DynamicForm key={1} config={formConfig} onSubmit={() => {}} />
    </div>
  )
}