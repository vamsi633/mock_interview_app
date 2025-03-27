//T extends FieldValues:
//T is a generic type parameter. It allows the interface to adapt to any form data structure, as long as it conforms to the FieldValues type.
//FieldValues is typically a type provided by React Hook Form (or a similar library). It represents the shape of the form’s data (e.g., { username: string, password: string }).
//By using T extends FieldValues, you’re saying: "T can be any object that fits the FieldValues structure."
//control: Control<T>:
//control is a required prop of type Control<T>.
//Control is a type from React Hook Form that manages the form state (e.g., values, validation, submission). It’s generic, so Control<T> ties it to the specific form data type T.
//This prop is used to connect the form field to the form’s state management system.
//name: Path<T>:
//name is a required prop of type Path<T>.
//Path<T> is a utility type (often from React Hook Form) that represents a valid key (or nested key) of the form data type T. For example, if T is { username: string, email: string }, then Path<T> could be "username" or "email".
//This ensures that the name prop corresponds to a field in the form data, providing type safety.
import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}
const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            className="input"
            type={type}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
