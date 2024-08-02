import React, { useState, ChangeEvent } from 'react';
import { Modal, Button, Form, Input, notification } from 'antd';
import styles from './send.module.css';

interface FormValues {
  name: string;
  phone: string;
}

const Send: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm<FormValues>();

  const handleOpenModal = () => {
    setVisible(true);
    form.setFieldsValue({ phone: '+998' });
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleFinish = (values: FormValues) => {
    console.log('Values:', values);
    notification.success({
      message: 'Success',
      description: 'Sizning ma\'lumotlaringiz qabul qilindi',
    });
    form.resetFields();
    handleCloseModal();
  };

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/[^\d+]/g, '');
    if (/^\+998\d{0,9}$/.test(cleanedValue) || cleanedValue === '+998') {
      form.setFieldsValue({ phone: cleanedValue });
    }
  };

  return (
    <div>
      <Button className={styles.send_button} onClick={handleOpenModal}>
        Buyurtma berish
      </Button>
      <Modal
        title={null}
        visible={visible}
        footer={null}
        onCancel={handleCloseModal}
        centered
      >
        <div className={styles.modal_container}>
          <div className={styles.modal_title}>
            Iltimos, operatorlarimiz siz bilan bog'lanishi uchun aloqa ma'lumotlaringizni qoldiring.
          </div>
          <Form form={form} onFinish={handleFinish}>
            <Form.Item
              name="name"
              className={styles.modal_form_item}
              rules={[{ required: true, message: 'Iltimos, ismingizni kiriting!' }]}
            >
              <Input placeholder="Sizning ismingiz" />
            </Form.Item>
            <Form.Item
              name="phone"
              className={styles.modal_form_item}
              rules={[
                { required: true, message: 'Iltimos, raqamingizni kiriting!' },
                { pattern: /^\+998\d{9}$/, message: 'Raqam +998 bilan boshlanishi va 9 ta raqamdan tashkil topishi kerak!' }
              ]}
            >
              <Input 
                placeholder="+998 99 999 99 99" 
                maxLength={13} 
                onChange={handlePhoneInput}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.modal_submit_button}>
                Buyurtma berish
              </Button>
            </Form.Item>
          </Form>
          <div className={styles.modal_description}>
            Ma&#39;lumotlarni to'ldirib &#39;Buyurtma berish&#39; tugmasini bosish orqali ma&#39;lumotlar yuboriladi va operator siz bilan tez orada bog&#39;lanadi.
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Send;
