type AvatarProps = {
    src: string;
    size?: 'sm' | 'md' | 'lg';
    alt?: string;
}

export const Avatar = ({ src, size = 'md', alt = 'avatar' }: AvatarProps) => {
    const sizes = {
        sm: 40,
        md: 50,
        lg: 62,
    }

    return (
        <img
            src={src}
            alt={alt}
            style={{
                width: sizes[size],
                height: sizes[size],
                borderRadius: "50%",
                objectFit: "cover",


            }} />
    )
}