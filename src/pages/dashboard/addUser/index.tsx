import {Button, Divider, Form, Input, message, Upload, UploadFile, UploadProps} from "antd";
import {useState} from "react";
import {RcFile, UploadChangeParam} from "antd/es/upload";
import { PlusOutlined} from '@ant-design/icons';
import {IUserRegister} from "../../../types/user";
import { useActions } from "../../../hooks/useActions";

const RegisterPage = () => {
    const {RegisterUser} = useActions()
    const [file, setFile] = useState<File | null>(null);
 
    const onSubmit = async (values: any) => {
       
        const model : IUserRegister = {
            firstName: values.name,
            image: file,
            email: values.email,
            lastName: values.lastName,
            phoneNumber: values.phone,
            password: values.password,
        };
        RegisterUser(model)
    }
    const onSubmitFailed = (errorInfo: any) => {
        console.log("Error Form data", errorInfo);
    }

    type FieldType = {
        name?: string;
        email?: string;
        lastName?: string;
        phone?: string;
        password?: string;
        password_confirmation?: string;
    };

    const beforeUpload = (file: RcFile) => {
        const isImage = /^image\/\w+/.test(file.type);
        if (!isImage) {
            message.error('Оберіть файл зображення!');
        }
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            message.error('Розмір файлу не повинен перевищувать 10MB!');
        }
        return isImage && isLt2M;
    };
    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        const file = info.file.originFileObj as File;
        setFile(file);
    };

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    return (
        <>
        <div className="container">

       
            <Divider>РЕЄСТРАЦІЯ</Divider>

            <Form
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{remember: true}}
                onFinish={onSubmit}
                onFinishFailed={onSubmitFailed}>

                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Вкажіть email!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Прізвище"
                    name="lastName"
                    rules={[{required: true, message: 'Вкажіть прізвище'}]}
                >
                    <Input/>
                </Form.Item>


                <Form.Item<FieldType>
                    label="Імя"
                    name="name"
                    rules={[{required: true, message: 'Вкажіть імя'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Телефон"
                    name="phone"
                >
                    <Input/>
                </Form.Item>


                <Form.Item<FieldType>
                    label="Пароль"
                    name="password"
                    rules={[{required: true, message: 'Вкажіть пароль'}]}
                >
                    <Input/>
                </Form.Item>


                <Form.Item<FieldType>
                    label="Підтвердіть пароль"
                    name="password_confirmation"
                    rules={[{required: true, message: 'Вкажіть пароль'}]}
                >
                    <Input/>
                </Form.Item>


                <Form.Item label="Image">
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="#"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                        accept={"image/*"}
                    >
                        {file ?
                            <img src={URL.createObjectURL(file)} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                    </Upload>
                  </Form.Item>


                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Створити аккаунт
                    </Button>
                </Form.Item>

            </Form>
            </div>
        </>
    )
}

export default RegisterPage;