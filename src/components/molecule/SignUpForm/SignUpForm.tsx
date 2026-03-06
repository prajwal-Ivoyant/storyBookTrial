import { Form, Button, Divider, Flex } from "antd";
import { CustomInput } from "../../atoms/Input/Input";
import { PasswordInput } from "../../atoms/PasswordInput/PasswordInput";
import { Button as IconButton } from "../../atoms/Buttons/Button";
import { GoogleOutlined, GithubOutlined, LinkedinOutlined, AppleOutlined } from '@ant-design/icons';

type SignUpFormProps = {
    onSubmit: (values: { email: string; password: string }) => void;
    loading?: boolean;
};

export const SignUpForm = ({ onSubmit, loading = false }: SignUpFormProps) => {
    return (
        <Form layout="vertical" onFinish={onSubmit}>

            <CustomInput
                label="Username"
                name="Usernameil"
                placeholder="Enter Username"
                InputType="text"
                required
                disabled={false}
            />


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
                    SubMit
                </Button>
            </Form.Item>

            <Divider><small>or</small></Divider>

            <Form.Item>
                <Flex justify="space-between">

                    <IconButton
                        label=""
                        icon={<GoogleOutlined />}
                        onClick={() => console.log("Sing-UP through Google")}

                    />

                    <IconButton
                        label=""
                        icon={<GithubOutlined />}
                        onClick={() => console.log("Sing-UP through GitHub")}

                    />


                    <IconButton
                        label=""
                        icon={<LinkedinOutlined />}
                        onClick={() => console.log("Sing-UP through LinkedIn")}

                    />

                    <IconButton
                        label=""
                        icon={<AppleOutlined />}
                        onClick={() => console.log("Sing-UP through Apple account")}

                    />

                </Flex>
            </Form.Item>

        </Form>
    );
};