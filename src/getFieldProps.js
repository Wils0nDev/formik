import { useFormik } from "formik";

const validate = (values) => {  //este recibe los valores del formulario 
  const errors = {}  //estos errores seran los que yo valla agregando en cada input

  //si el valor de name es vacío despues de haber tocado el campo (focus on)
  //entonces nos dira que este campo es requerido.
  if(!values.name){
    errors.name = 'Requerido'
  }else if(values.name.length < 5){
    errors.name = 'El nombre es muy corto'
  }
  
  if(!values.lastname){
    errors.lastname = 'Requerido'
  }else if(values.lastname.length < 5){
    errors.lastname = 'El apellido es muy corto'
  }

  
  return errors //retorno mis errores
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate, 

    onSubmit: (values) => console.log(values),
  });
  return (

    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        {...formik.getFieldProps('name')}
      />
    
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>: null}
      <br />
      <label>LastName</label>
      <input
        name="lastname"
        type="text"
        {...formik.getFieldProps('lastname')}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div>: null}
      <br />
      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        value={formik.values.email}
      />
      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
