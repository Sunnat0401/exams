import React from 'react';
import Image from 'next/image';
import { Form, Input, Button, notification } from 'antd';
import type { FormInstance } from 'antd/es/form';
import styles from './footer.module.css';
import { Phone, face1, face2, face3, face4, face5, footerImage } from '../../../public';

// Telefon raqami validatsiyasi
const phoneValidator = (_: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error('Iltimos, raqamingizni kiriting!'));
  }
  const regex = /^\+998\d{9}$/;
  if (!regex.test(value)) {
    return Promise.reject(new Error('Raqam +998 bilan boshlanishi va 9 ta raqamdan tashkil topishi kerak!'));
  }
  return Promise.resolve();
};

const Footer: React.FC = () => {
  const [form] = Form.useForm();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^+\d]/g, '');
    if (numericValue.length <= 13) {
      form.setFieldsValue({ phone: numericValue });
    }
  };

  const onFinish = (values: { phone: string }) => {
    console.log('Values:', values);
    notification.success({
      message: 'Congratulations!',
      description: 'Telefon raqamingiz to\'g\'ri kiritildi 👍🎉✔',
    });
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_information}>
            <p className={styles.footer_text}>
              Biz har doim sizning savollaringiz va takliflaringizga ochiqmiz. Biz bilan qulay usulda bog'laning, va bizning jamoamiz sizga imkon qadar tezroq javob beradi.
            </p>
            <Form
              form={form}
              className={styles.footer_form}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              autoComplete="off"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    validator: phoneValidator,
                  },
                ]}
              >
                <Input
                  onChange={handlePhoneChange}
                  maxLength={13}
                  defaultValue="+998"
                  className={styles.footer_input}
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Menga qo&#39;ng&#39;iroq qiling
                </Button>
              </Form.Item>
            </Form>
          </div>
          <Image src={footerImage} alt='image'/>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_left}>
            <ul className={styles.footer_lists}>
              <li className={styles.footer_list}><Image src={Phone} alt='image'/></li>
              <li className={styles.footer_list}><p className={styles.footer_number}>+ 998 77 273 00 17 </p></li>
            </ul>
            <ul className={styles.footer_lists}>
              <li className={styles.footer_item}><Image className={styles.footer_pictures} src={face1} alt='face1'/></li>
              <li className={styles.footer_item}><Image className={styles.footer_pictures} src={face2} alt='face2'/></li>
              <li className={styles.footer_item}><Image className={styles.footer_pictures} src={face3} alt='face3'/></li>
              <li className={styles.footer_item}><Image className={styles.footer_pictures} src={face4} alt='face4'/></li>
            </ul>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_location}>
              <Image src={face5} alt='image'/>
              <p className={styles.footer_info}>Toshkent, O&#39;zbekiston</p>
            </div>
            <p className={styles.footer_info}>Chilonzor 18/19 uy</p>
          </div>
        </div>
        <p className={styles.footer_name}>DarmonTravel 2024</p>
      </div>
    </div>
  );
};

export default Footer;
