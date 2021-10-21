import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Its to short').required('Required'),
  email: Yup.string().email('Its not email').required('Required'),
  gender: Yup.string().oneOf(['male', 'female'], 'Required').required('Required'),
  phoneNumber: Yup.number().typeError('Enter valid Phone Number').required('Required'),
  password: Yup.string().min(8, 'Pasword minimum length should be 8').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'password not matched').required('Required'),
  termsAndConditions: Yup.string().oneOf(['true', 'false'], 'Accept terms and conditions')
});

export default validationSchema;