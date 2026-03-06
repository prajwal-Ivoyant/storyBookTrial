import { Avatar as AntDAvatar } from "antd";

type AvatarSize = "sm" | "md" | "lg";

type AvatarProps = {
    src: string;
    size?: AvatarSize;
    shape?: "square" | "circle";
    alt?: string;
};

export const Avatar = ({
    src,
    size = "md",
    shape = "circle",
    alt = "avatar",
}: AvatarProps) => {

    const sizeMap: Record<AvatarSize, number> = {
        sm: 32,
        md: 40,
        lg: 64,
    };

    return (
        <AntDAvatar
            src={src}
            size={sizeMap[size]}
            shape={shape}
            alt={alt}
            style={{
                border: "0.5px solid black",
            }}
        />
    );
};