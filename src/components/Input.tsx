import type { CSSProperties, HTMLInputAutoCompleteAttribute, PropsWithChildren } from "react";


type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

type InputProps = PropsWithChildren<{
    label: string;
    placeholder: string;
    variant: Variant;
    size: Size;
    error: string;
    disabled: boolean;
}>;

export const Input = ({
    label,
    placeholder,
    error,
    disabled = false,
    variant = "primary",
    size = "lg",
}: InputProps) => {
    const variantStyles: Record<Variant, CSSProperties> = {
        primary: {
            border: "2px solid blue",
        },
        secondary: {
            border: "2px solid gray",
        },
    };

    const sizeStyles: Record<Size, CSSProperties> = {
        sm: {
            padding: "0.4rem",
            fontSize: "0.8rem",
        },
        md: {
            padding: "0.6rem",
            fontSize: "1rem",
        },
        lg: {
            padding: "0.8rem",
            fontSize: "1.2rem",
        },
    };




    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label>{label}</label>

                <input
                    type="text"
                    placeholder={placeholder}
                    disabled={disabled}

                    style={{
                        borderRadius: "6px",
                        outline: "none",
                        opacity: disabled ? 0.6 : 1,
                        cursor: disabled ? "not-allowed" : "text",
                        ...variantStyles[variant],
                        ...sizeStyles[size],
                    }}

                />

                {error && (

                    <span style={{ color: "red", fontSize: "0.8rem" }}>
                        {error}
                    </span>
                )}


            </div>
        </>
    );
};