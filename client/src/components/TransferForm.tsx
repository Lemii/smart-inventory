import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Button, Select, Result, Typography, message } from 'antd';

import { TICKER, FEES, VALUE_LIMIT } from '../constants';
import { CatalogContext, AuthContext } from '../contexts';
import { transferItem, fetchOwnedItems } from '../services';
import { ItemAccount } from '../types';

import QualitySlider from './QualitySlider';

const { Option } = Select;

const TransferForm = () => {
  const history = useHistory();
  const catalog = React.useContext(CatalogContext);
  const auth = React.useContext(AuthContext);
  const [formCompleted, setFormCompleted] = useState<boolean>(false);
  const [ownedItems, setOwnedItems] = useState<ItemAccount[]>([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchOwnedItemsByUser = async () => {
      const data: ItemAccount[] = await fetchOwnedItems(auth.account.address);
      setOwnedItems(data);
    };

    form.setFieldsValue({ state: 5 });
    fetchOwnedItemsByUser();
  }, [auth, form]);

  const onFinish = async (values: any) => {
    const transfer = {
      newOwner: values.owner,
      newValue: Number(values.value),
      newState: Number(values.state),
      address: values.identifier
    };

    transferItem(transfer, auth.account.passphrase)
      .then(() => setFormCompleted(true))
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
          {ownedItems.map((item) => (
            <Option value={item.address} key={'key-' + item.address}>
              {catalog.find((catalogItem) => catalogItem.id === item.asset.itemProperties.identifier)?.name} (
              {item.address})
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="owner"
        label="New owner"
        rules={[
          {
            required: true,
            pattern: /\d+L/,
            message: 'Input is not a valid account address'
          }
        ]}
      >
        <Input type="text" placeholder="Address of new owner" />
      </Form.Item>

      <Form.Item
        name="state"
        label="State at transfer"
        rules={[
          {
            required: true
          }
        ]}
      >
        <QualitySlider />
      </Form.Item>

      <Form.Item
        name="value"
        label="Value at transfer"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input addonBefore="$ " type="number" placeholder="Value of the item at transfer" min={1} max={VALUE_LIMIT} />
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
            Transferring an item costs {FEES.transferItem} {TICKER}
          </small>
        </Typography.Text>
      </Form.Item>
    </Form>
  ) : (
    <Result
      status="success"
      title={`Item successfully transferred!`}
      subTitle="It can take up to 10 seconds before the transfer is visible"
      extra={[
        <Button type="primary" key="console" onClick={() => history.push(`/item/${form.getFieldValue('identifier')}`)}>
          View Item
        </Button>,
        <Button key="reset" onClick={onReset}>
          Transfer Another Item
        </Button>
      ]}
    />
  );
};

export default TransferForm;
