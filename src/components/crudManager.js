import React,{useState,useEffect} from 'react'
import connect from 'react-redux/es/connect/connect'
import {logout} from '../store/actions/weatherActions'
import { Modal, Button ,Form, Input,Table} from 'antd';
import {getManagerList,addManager} from '../store/actions/companyActions'
import Column from 'antd/lib/table/Column';
function CrudManager(props){
    const [visible,setVisible] = useState(false)

    const {managers} = props.companyReducer
    const showModal = () => {
        setVisible(true);
    };
    const closeModal = () => {
    setVisible(false);
    };
    useEffect(() => {
        props.getManagerList(props.match.params.id)
    }
    // eslint-disable-next-line 
    ,[]);
    const onFinish = (values) =>{
        const data = {
            firstName: values.firstName,
            lastName:values.lastName,
            middleName:values.middleName,
            phoneNumber:values.phoneNumber,
            iin:values.iin,
            email:values.email,
            companyId:props.match.params.id,
            username:values.username
        }
        props.addManager(data,closeModal,props.match.params.id)
    }
    
    return(
        <div>
             <Button type="primary" onClick={() => props.logout()}>
             Выйти
             </Button>
             <Button type="primary" onClick={() => showModal()}>
             Добавить менеджера
             </Button>
             <Modal
                title="Title"
                visible={visible}
                onCancel={closeModal}
                footer={[
                  ]}
            >
            <Form
            name="basic"
            onFinish={onFinish}
            >
            <Form.Item
                label="firstName"
                name="firstName"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="lastName"
                name="lastName"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="middleName"
                name="middleName"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="phoneNumber"
                name="phoneNumber"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="iin"
                name="iin"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input type='email'/>
            </Form.Item>
            <Form.Item
                label="username"
                name="username"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                Добавить
                </Button>
            </Form.Item>
            </Form>
            </Modal>

            <Table dataSource={managers} >
                <Column dataIndex="firstName" key='firstName' title='Имя'></Column>
                <Column dataIndex="lastName" key='lastName' title="Фамилия"></Column>
                <Column dataIndex="phoneNumber" key='phoneNumber' title="Номер"></Column>
                <Column key='description' render={(record) => (
                    <Button onClick={() => props.deleteCompany(record.id)}>Удалить</Button>
                )} ></Column>
            </Table>
        </div>
    )
}
const mapStateToProps = (state) => ({
    companyReducer:state.companyReducer
});

export default connect(mapStateToProps, {addManager,logout,getManagerList})(CrudManager);
