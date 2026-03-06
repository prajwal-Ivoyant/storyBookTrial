import type { CSSProperties, ReactNode } from "react";
import { Button as AntDButton } from "antd";

type Size = "sm" | "md" | "lg";
type Category = "primary" | "default" | "dashed";

type ButtonProps = {
    onClick?: () => void;
    label: string;
    category?: Category;
    size?: Size;
    icon: ReactNode
};

export const Button = ({
    onClick,
    label,
    category = "default",
    size = "md",
    icon
}: ButtonProps) => {

    const sizeStyles: Record<Size, CSSProperties> = {
        sm: {
            padding: "4px 10px",
            fontSize: "12px",
        },
        md: {
            padding: "6px 16px",
            fontSize: "14px",
        },
        lg: {
            padding: "8px 20px",
            fontSize: "16px",
        },
    };

    return (
        <AntDButton
            type={category}
            onClick={onClick}
            icon={icon}
            style={{
                ...sizeStyles[size],
            }}
        >
            {label}
        </AntDButton>
    );
};