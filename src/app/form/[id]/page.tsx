"use client";
import DynamicForm from "@/components/DynamicForm";
import { FormConfig } from "@/lib/form.interfaces";
import React, { useState } from "react";

const formConfig: FormConfig = {
  name: "User Registration",
  description: "Register a new user",
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
  ]
};

export default function Form({ params }:any) {

  return (
    <div className="flex justify-center w-full">
      <DynamicForm key={1} config={formConfig} onSubmit={() => {}} />
    </div>
  )
}