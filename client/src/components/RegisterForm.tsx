import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Select, Result, Typography, message } from 'antd';

import { TICKER, FEES, VALUE_LIMIT } from '../constants';
import { CatalogContext, AuthContext } from '../contexts';
import { registerItem } from '../services';

import QualitySlider from './QualitySlider';

const { Option } = Select;

const RegisterForm = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const catalog = React.useContext(CatalogContext);
  const auth = React.useContext(AuthContext);
  const [formCompleted, setFormCompleted] = useState<boolean>(false);
  const [itemAddress, setItemAddress] = useState<string>('');

  useEffect(() => {
    form.setFieldsValue({ state: 5 });
  }, [form]);

  const onFinish = async (values: any) => {
    const registration = {
      identifier: values.identifier,
      numOfOwners: values.owners ? Number(values.owners) + 1 : 1,
      originalValue: Number(values.originalValue),
      lastValue: Number(values.lastValue),
      state: Number(values.state)
    };

    registerItem(registration, auth.account.passphrase)
      .then((address) => {
        setItemAddress(address);
        setFormCompleted(true);
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const onItemChange = (id: string) => {
    const data = catalog.find((item) => item.id === id);

    form.setFieldsValue({ originalValue: data?.originalValue || 0, lastValue: data?.originalValue || 0 });
  };

  const onReset = () => {
    form.resetFields();
    form.setFieldsValue({ state: 5 });
    if (formCompleted) setFormCompleted(false);
  };

  return !formCompleted ? (
    <Form layout="vertical" form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="identifier"
        label="Item"
        rules={[
          {
            required: true,
            message: 'Item is required'
          }
        ]}
      >
        <Select placeholder="Select your item from the catalog" onChange={onItemChange}>
          {catalog.map((item) => (
            <Option value={item.id} key={'key-' + item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="originalValue"
        label="Original value"
        rules={[
          {
            required: false
          }
        ]}
      >
        <Input addonBefore="$ " type="number" placeholder="Value of item at launch" disabled />
      </Form.Item>
      <Form.Item
        name="owners"
        label="Previous owners"
        rules={[
          {
            required: false
          }
        ]}
      >
        <Input type="number" placeholder="Leave empty if you are the first owner" />
      </Form.Item>
      <Form.Item
        name="state"
        label="State"
        rules={[
          {
            required: true
          }
        ]}
      >
        <QualitySlider />
      </Form.Item>
      <Form.Item
        name="lastValue"
        label="Value at last transfer"
        rules={[
          {
            required: false
          }
        ]}
      >
        <Input addonBefore="$ " type="number" placeholder="Last price the item sold for" min={1} max={VALUE_LIMIT} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="mr-2">
          Submit
        </Button>

        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>

        <Typography.Text type="secondary" className="block">
          <small>
            Registering an item costs {FEES.registerItem} {TICKER}
          </small>
        </Typography.Text>
      </Form.Item>
    </Form>
  ) : (
    <Result
      status="success"
      title={`Item successfully registered!`}
      subTitle="It can take up to 10 seconds before the item is visible."
      extra={[
        <Button type="primary" key="console" onClick={() => history.push(`/item/${itemAddress}`)}>
          View Item
        </Button>,
        <Button key="reset" onClick={onReset}>
          Register Another Item
        </Button>
      ]}
    />
  );
};

export default RegisterForm;
