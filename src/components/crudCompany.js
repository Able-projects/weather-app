import React,{useState,useEffect} from 'react'
import connect from 'react-redux/es/connect/connect'
import {Link} from 'react-router-dom'
import {logout} from '../store/actions/weatherActions'
import { Modal, Button ,Form, Input, Select,Table} from 'antd';
import {getCompanyFields,getCompanyTypes,getCompanyList,addCompany,deleteCompany} from '../store/actions/companyActions'
import Column from 'antd/lib/table/Column';
function CrudCompany(props){
    const [visible,setVisible] = useState(false)
    const {Option} = Select
    const {companyTypes,companyFields,companyList} = props.companyReducer
    const showModal = () => {
        setVisible(true);
    };
    const closeModal = () => {
    setVisible(false);
    };
    useEffect(() => {
        props.getCompanyFields()
        props.getCompanyTypes()
        props.getCompanyList()
    }
    ,[]);
    const onFinish = (values) =>{
        props.addCompany(values,closeModal)
    }
    
    return(
        <div>
             <Button type="primary" onClick={() => props.logout()}>
             Выйти
             </Button>
             <Button type="primary" onClick={() => showModal()}>
             Добавить компанию
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
                label="Название компаний"
                name="title"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Описаниe"
                name="description"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Тип компаний"
                name="typeId"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Select>
                    {companyTypes?.map(item =>(
                        <Option value={item.id}>{item.typeName}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Вид деятельности"
                name="fieldId"
                rules={[{ required: true, message: 'Please input your company title!' }]}
            >
                <Select>
                    {companyFields?.map(item =>(
                        <Option value={item.id}>{item.fieldName}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                Добавить
                </Button>
            </Form.Item>
            </Form>
            </Modal>

            <Table dataSource={companyList?.rows} >
                <Column key='title' title='Название' render={(record) => (
                    <Link to={'/company/'+record.id}>{record.title}</Link>
                )} ></Column>
                <Column dataIndex="description" key='description' title="Описание"></Column>
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

export default connect(mapStateToProps, {deleteCompany,logout,getCompanyFields,getCompanyTypes,getCompanyList,addCompany})(CrudCompany);
