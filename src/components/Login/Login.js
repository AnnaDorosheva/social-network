import React from "react";
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {
  console.log(props)
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
        remember me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ 
  form: 'login',                          
  // fields: ['login', 'password', 'rememberMe'] // all the fields in your form
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div>
      <h2>LOGIN</h2>
      <LoginReduxForm  onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;
