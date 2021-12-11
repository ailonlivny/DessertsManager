import {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Form, Input, Button, InputNumber, message} from 'antd';
import {actionTypes} from '../../store/actionTypes';
import './DessertForm.css';

const DessertForm = ({desserts}) => {
  const [dessertName, setDessertName] = useState("");
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch()
  const [form] = Form.useForm();

  const addDessertInfo = () => {  
    let action = "";
    const isDesertExist = desserts.some(dessert => dessert.dessertName === dessertName);

    if (isDesertExist) {
      dispatch({type: actionTypes.UPDATE, payload: {dessertName, amount}});
      action = "updated";
    } else {
      dispatch({type: actionTypes.ADD, payload: {dessertName, amount}});  
      action = "added";
    }
    
    message.success(`${dessertName} was ${action} successfully`);
    form.resetFields();
  };

  const failedToAddDessertInfo = error => {
    message.error(error.errorFields[0].errors[0]);
  };

  return (
    <div className="dessert-form">
      <Form name="control-hooks" form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={addDessertInfo} onFinishFailed={failedToAddDessertInfo}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter a dessert name" }]}>
          <Input className="input" onChange={event => setDessertName(event.target.value)}/>
        </Form.Item>

        <Form.Item label="Count" name="count" rules={[{ required: true, message: "Please enter a dessert amount" },]}>
          <InputNumber className="input" onChange={event => setAmount(event)} min={0}/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">Add Dessert</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  desserts: state 
});

export default connect(mapStateToProps)(DessertForm);
