import { Form, Input } from "antd";
import type { Rule } from "antd/es/form";

interface PasswordInputProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const passwordRules: Rule[] = [
  {
    required: true,
    message: "Please enter password",
  },
  {
    min: 6,
    message: "Password must be at least 6 characters",
  },
];

export const PasswordInput = ({
  label,
  name,
  placeholder,
  required = false,
}: PasswordInputProps) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={required ? passwordRules : []}
    >
      <Input.Password placeholder={placeholder} />
    </Form.Item>
  );
};