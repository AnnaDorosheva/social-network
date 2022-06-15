import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../../helpers/Textarea/Textarea";
import { required } from "../../helpers/validators/validators";
import { login } from "../../redux/auth-reduser";
import s from "../../helpers/Textarea/Textarea.module.css";
import { AppStateType } from "../../redux/redux-store";
// import createFild from "../../helpers/Textarea/Textarea";

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = (props) => {
  // console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      {/* {createFild("Login", "email", "email", Input, [required])}
      {createFild("Password", "password", "password", Input, [required])}
      {createFild(null, "rememberMe", "checkbox", Input, null, "remember me")} */}
      <div>
        <Field
          placeholder={"Login"}
          name={"email"}
          type={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
      {props.error && <span className={s.span}>{props.error}</span>}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, {}>({
  form: "login",
})(LoginForm);

type MapStateToPropsType = {
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};

type LoginFormValuesType = {
  email: string, password: string, rememberMe: boolean
}
const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
  const onSubmit = (data: LoginFormValuesType) => {
    props.login(data.email, data.password, data.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h2>LOGIN</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.authReduser.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
