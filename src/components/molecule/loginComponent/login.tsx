import { Form, Button } from "antd";
import { CustomInput } from "../../atoms/Input/Input";
import { PasswordInput } from "../../atoms/PasswordInput/PasswordInput";

type LoginProps = {
    onSubmit: (values: { email: string; password: string }) => void;
    loading?: boolean;
};

export const Login = ({ onSubmit, loading = false }: LoginProps) => {
    return (
        <Form layout="vertical" onFinish={onSubmit}>

            <CustomInput
                label="Email"
                name="email"
                placeholder="Enter email"
                InputType="email"
                required
                disabled={false}
            />

            <PasswordInput
                label="Password"
                name="password"
                placeholder="Enter password"
                required
            />

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Login
                </Button>
            </Form.Item>

        </Form>
    );
};