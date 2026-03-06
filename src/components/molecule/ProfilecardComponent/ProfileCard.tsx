import { Avatar } from "../../atoms/Avatar/Avatar";
import { Button } from "../../atoms/Buttons/Button";

type ProfileCardProps = {
    name: string;
    role: string;
    avatar: string;
}

export const ProfileCard = ({ name, role, avatar }: ProfileCardProps) => {
    return (
        <div
            style={{
                width: "220px",
                padding: "16px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                textAlign: "center",
                fontFamily: "sans-serif",
            }}
        >

            <Avatar src={avatar} size="lg" alt={name} />

            <h3 style={{ marginTop: "10px" }}>{name}</h3>
            <p style={{ color: "gray", fontSize: "14px" }}>{role}</p>


            <Button
                label="Follow me"
                size="lg"
                category="primary"
                onClick={() => console.log("Button Clicked")}
            />

        </div>
    )
}