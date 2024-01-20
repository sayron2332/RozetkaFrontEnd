import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { IUserRegister } from '../../types/user';
import "./index.css"
import { NavLink } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { ToastContainer } from 'react-toastify';



  
const SignUp = () => {

  const{RegisterUser} = useActions();

  const onFinish = (values: IUserRegister) => {

    console.log(values);
    RegisterUser(values);
 };
   
 const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
 };

return(
    <>
      <div className="container">
        <Divider>Зареєструватись</Divider>
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
              
            <Form.Item<IUserRegister>
              label="First Name"
              name="firstName"
              rules={[{ required: true, min: 3}]}
            >
              <Input />
            </Form.Item>

            <Form.Item<IUserRegister>
              label="Last Name"
              name="lastName"
              rules={[{ required: true, min: 3}]}
            >
              <Input />
            </Form.Item>

            <Form.Item<IUserRegister>
              label="Phone"
              name="phoneNumber"
            >
              <Input />
            </Form.Item>

            <Form.Item<IUserRegister>
              label="Email"
              name="email"
              rules={[{ required: true,  type: 'email' }]}
            >
              <Input />
            </Form.Item>
        
            <Form.Item<IUserRegister>
              label="Password"
              name="password"
              rules={[{ required: true,  min: 6 }]}
            >
              <Input.Password />
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




