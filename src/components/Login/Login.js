import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {Field, reduxForm} from 'redux-form';
import { Input } from "../../helpers/Textarea/Textarea";
import {required, maxLengthCreator} from "../../helpers/validators/validators";
import { login } from '../../redux/auth-reduser';

const maxlength = maxLengthCreator(16)

const LoginForm = (props) => {
  // console.log(props)
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"email"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required, maxlength]} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
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
})(LoginForm);

const Login = (props) => {
  const onSubmit = (data) => {
    props.login(data.email, data.password, data.rememberMe);
  };

  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return (
    <div>
      <h2>LOGIN</h2>
      <LoginReduxForm  onSubmit={onSubmit}/>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.authReduser.isAuth
  }
}

export default connect(mapStateToProps, { login })(Login);



