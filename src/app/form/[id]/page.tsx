"use client";
import DynamicForm from "@/myComponents/DynamicForm";
import { FormConfig } from "@/lib/form.interfaces";
import React from "react";
import FormBuilder from "@/components/FormBuilder";

const formConfig: FormConfig = {
  id: 1234567,
  name: "User Registration",
  description: `This conference registration form is a comprehensive tool designed to streamline the process of registering attendees for various events and sessions. At the outset, the form collects essential personal information from the registrant, including their full name, email address, and phone number. This information is crucial for maintaining accurate records and ensuring effective communication with the participants.
        Following the personal details section, the form delves into specifics about the event. 
        Attendees can select the event they wish to attend from a dropdown menu, which includes options such as the Annual Tech Conference, Startup Pitch Night, Networking Gala, and Coding Bootcamp. This allows organizers to manage multiple events efficiently and ensures that participants register for the correct event. Additionally, registrants can indicate their preferred session time using radio buttons, offering choices like Morning (9 AM - 12 PM), Afternoon (1 PM - 4 PM), and Evening (5 PM - 8 PM). 
        This flexibility accommodates various schedules and maximizes attendance.`,
  createdAt: new Date(),
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
      description: "Please enter your full name",
      required: true,
    },
    {
      id: "2",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      description: "Please enter your email address",
      required: true,
    },
    {
      id: "3",
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      description: "Please enter a secure password",
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
      id: "10",
      name: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Some address blah, blah, blah ...",
      description: "Enter your permanent address",
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
      id: "9",
      name: "skills",
      label: "Skills",
      type: "checkbox",
      options: ["React", "Angular", "Vue", "Svelte"],
      required: true,
    },
    {
      id: "6",
      name: "terms",
      label: "I agree to the terms and conditions",
      type: "checkbox",
      options:["I agree"],
      required: true,
    },
    {
      id: "8",
      name: "department",
      label: "Department",
      type: "select",
      options: ["CSE", "ECE", "EEE", "MECH", "CIVIL"],
      required: true,
    },
    {
      id: "7",
      name: "feedback",
      label: "Feedback",
      type: "range",
      required: true,
      min:0,
      max:5
    }
  ]
};

export default function Form({ params }:any) {

  return (
    <div className={`flex justify-center w-full max-h-full min-h-screen`} style={{backgroundColor: formConfig.theme.primary, color: formConfig.theme?.primary}}>
      {/* <DynamicForm key={1} config={formConfig} onSubmit={() => {}} /> */}
      <FormBuilder config={formConfig} />
    </div>
  )
}