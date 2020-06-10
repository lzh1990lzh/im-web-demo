import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Space, Card, Typography, Alert,Table,Select,Row, Col,Form, Input,DatePicker,Button,Modal } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '填报单位',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '提交时间',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '审批状态',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '最新审批人',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '最新审批时间',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '审批状态',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: () => 
    <Space size="middle">
         <Button type="primary" onClick={showModal}>详情</Button>
         <Button type="primary" onClick={showModal}>导出</Button>
       </Space>,
   
  },
];
const { Option } = Select;
const { RangePicker } = DatePicker;
const state = { visible: false };
const { Column, ColumnGroup } = Table;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function showModal(){
  alert("11");
}



export default (): React.ReactNode => (
    <PageHeaderWrapper>
      <Card>      
      <Row gutter={16}>    
        <Col className="gutter-row" span={6}>
          <Form.Item name="name" label="审批状态：">
            <Select defaultValue="lucy" onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
          </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item name="name" label="日期">
           <RangePicker/>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={2}>
        <Button type="primary">查询</Button>
        </Col>     
      </Row>   
      
      <Table dataSource={dataSource} columns={columns} />     
      {/* <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
      </Card>
      
    </PageHeaderWrapper>
  );