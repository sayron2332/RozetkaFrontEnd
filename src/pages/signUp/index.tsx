import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { IUserLogin } from '../../types/user';
import "./index.css"
import { NavLink } from 'react-router-dom';


const onFinish = (values: IUserLogin) => {
   console.log('Success:', values);
};
  
const onFinishFailed = (errorInfo: any) => {
   console.log('Failed:', errorInfo);
};
  
const SignUp = () => {
return(
    <>
      <div className="container">
        <Divider>Зареєструватись</Divider>
      <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item<IUserLogin>
              label="Email"
              name="email"
              rules={[{ required: true,  type: 'email' }]}
            >
              <Input />
            </Form.Item>
        
            <Form.Item<IUserLogin>
              label="Password"
              name="password"
              rules={[{ required: true,  min: 6 }]}
            >
              <Input.Password />
            </Form.Item>
        
            <Form.Item<IUserLogin>
            
              label="Remember Me"
              name="rememberMe"
              valuePropName="checked"
            
            >
              <Checkbox></Checkbox>
            </Form.Item>
        
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            <Form.Item >
            <span>Якщо в вас є акаунт </span><NavLink to="/login">Увійдіть</NavLink>
            </Form.Item>


         
        </Form>

      </div>
       
   </>
)
    }

export default SignUp




