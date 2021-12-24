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
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <LoginReduxForm  onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;

// export const fields = [ 'name', 'password', 'rememberMe'];

// class LoginForm extends Component {
//  componentDidUpdate() {
//    console.log(this.props)
//  }
//   render() {
//     // console.log(this.props);
//     const {fields: {name, password, rememberMe}, handleSubmit} = this.props;
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input typr="text" placeholder={"Login"} name={"login"} {...name}/>
//         </div>
//         <div>
//           <input type="text" placeholder={"Password"} name={"password"} {...password} />
//         </div>
//         <div>
//           <input type={"checkbox"} name={"rememberMe"} {...rememberMe} />
//           remember me
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     );
//   } 
// };

// const LoginReduxForm = reduxForm({ 
//   form: 'login',                          
//   fields: ['login', 'password', 'rememberMe'] // all the fields in your form
// })(LoginForm);

// const Login = () => {
//   const onSubmit = (form) => {
//     console.log(form)
//   }
//   return (
//     <div>
//       <h2>LOGIN</h2>
//       <LoginReduxForm  onSubmit={onSubmit}/>
//     </div>
//   );
// };

// export default Login;

