import React from 'react'
import {
  Input,
  Button,Space
} from 'antd';
import 'antd/dist/antd.css';

const AddInput = (props) => {
  const { isInputShow } = props


  return (
    <>
        {

          isInputShow ? (
            <Input.Group compact style={{marginTop:'5px'}}>
              <Input style={{ width: 'calc(100% - 88px)' }} />
              <Button type="primary">Submit</Button>
            </Input.Group>
          ) : null
        }
    </>
  )
}


export default AddInput