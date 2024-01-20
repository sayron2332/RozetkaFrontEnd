import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { IUserLogin } from '../../types/user';
import "./index.css"
import { NavLink } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

  
const SignIn = () => {

const { LoginUser } = useActions();


const onFinish = (values: IUserLogin) => {
    
    LoginUser(values);
 };
   
 const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
 };
return(
    <>
      <div className="container">
        <Divider>Увійти</Divider>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
          
          />
        <ToastContainer />
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
            <span>Якщо в вас немає акаунта </span><NavLink to="/register">Зареєструйтеся</NavLink>
            </Form.Item>
        </Form>

      </div>
       
   </>
)
    }

export default SignIn




