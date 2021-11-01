import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  body: Yup.string().required("Required")
});

export default validationSchema;