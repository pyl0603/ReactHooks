import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';
const Header = (props) => {
  const { openInput } = props
  return (
    <div className='Header' >
      <Row gutter={16} type="flex" justify="center" align="middle" wrap={false} style={{ background: '#46A3FF', height: '50px', fontSize: '22px', color: '	#FFFFFF' }} >
        <Col span={24}>
          <div>待辦事項</div>
        </Col>
        <Col span={1} pull={3} onClick={openInput}>
          <PlusOutlined />
        </Col>
      </Row>
    </div>
  )
}
export default Header