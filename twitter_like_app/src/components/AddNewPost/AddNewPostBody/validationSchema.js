import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  title: Yup.string().min(4).required('Required'),
  body: Yup.string().min(8).required("Required")
});

export default validationSchema;