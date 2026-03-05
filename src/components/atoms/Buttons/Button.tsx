import type { CSSProperties, PropsWithChildren } from "react";


type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

type ButtonProps = PropsWithChildren<{
    onClick: () => void;
    variant: Variant;
    size: Size;

}>;

export const Button = ({
    children,
    onClick,
    variant = "primary",
    size = "md",

}: ButtonProps) => {
    const variantStyles: Record<Variant, CSSProperties> = {
        primary: {
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
        },
        secondary: {
            backgroundColor: "gray",
            color: "white",
            borderRadius: '10px'
        },
    };

    const sizeStyles: Record<Size, CSSProperties> = {
        sm: {
            padding: "0.4rem 0.8rem",
            fontSize: "0.8rem",
        },
        md: {
            padding: "0.6rem 1rem",
            fontSize: "1rem",
        },
        lg: {
            padding: "0.8rem 1.4rem",
            fontSize: "1.2rem",
        },
    };



    return (
        <button
            onClick={onClick}

            style={{
                ...variantStyles[variant],
                ...sizeStyles[size],
            }}
        >
            {children}
        </button>
    );
};