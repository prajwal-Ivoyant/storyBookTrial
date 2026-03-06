import { Form, Input } from "antd";
import type { Rule } from "antd/es/form";

interface CustomInputProps {
    label: string;
    name: string;
    placeholder?: string;
    InputType: "text" | "email" | "number";
    required?: boolean;
    disabled?: boolean;
}

const getValidationRule = (InputType: "text" | "email" | "number"): Rule => {
    switch (InputType) {
        case "email":
            return { type: "email", message: "Enter a valid email" };

        case "number":
            return { pattern: /^[0-9]+$/, message: "Enter a valid number" };

        default:
            return { pattern: /^[a-zA-Z\s]+$/, message: "Enter valid text" };
    }
};

export const CustomInput = ({
    label,
    name,
    placeholder,
    InputType = "text",
    required = true,
    disabled = false,
}: CustomInputProps) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                ...(required
                    ? [{ required: true, message: `Please enter ${label}` }]
                    : []),
                getValidationRule(InputType),
            ]}
        >
            <Input type={InputType} placeholder={placeholder} disabled={disabled} />
        </Form.Item>
    );
};

