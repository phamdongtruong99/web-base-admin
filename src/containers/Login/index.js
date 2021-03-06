import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Button, Checkbox } from 'antd';
import i18n from 'i18next';
import MaterialInput from 'components/MaterialInput';
// import actions
import { loginAction } from 'redux/auth/actions';

const FormItem = Form.Item;

const Login = ({ form }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const { getFieldDecorator } = form;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        dispatch(loginAction(values));
      }
    });
  };

  return (
    <div>
      <div className="title">
        <span>{i18n.t('login.title')}</span>
      </div>
      <Form layout="vertical" onSubmit={handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: i18n.t('input.username.validateMsg.required') }],
          })(
            <MaterialInput
              placeholder={i18n.t('input.username.placeholder')}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: i18n.t('input.password.validateMsg.required') }],
          })(
            <MaterialInput
              placeholder={i18n.t('input.password.placeholder')}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
            />
          )}
        </FormItem>
        <div className="sub-action-div">
          <Checkbox>{i18n.t('login.rememberMe')}</Checkbox>
          <a className="login-form-forgot" href="/login">
            {i18n.t('login.forgotPassword')}
          </a>
        </div>
        <div className="action-div">
          <Button type="primary" htmlType="submit" className="login-form-button">
            {i18n.t('login.loginBtn')}
          </Button>
        </div>
      </Form>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.object,
};

export default Form.create()(Login);
