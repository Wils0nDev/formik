import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = (values) => {
  //este recibe los valores del formulario
  const errors = {}; //estos errores seran los que yo valla agregando en cada input

  //si el valor de name es vacío despues de haber tocado el campo (focus on)
  //entonces nos dira que este campo es requerido.
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }

  return errors; //retorno mis errores
};

function App() {
  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <Form>
          <label>Name</label>
          <Field name="name" type="text" />
           <ErrorMessage name="name" /> 
          <br />
          <label>LastName</label>
          <Field name="lastname" type="text"/>
          <ErrorMessage name="lastname" />
          <br />
          <label>Email</label>
          <Field name="email" type="email"  />
          <br />

          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
}

export default App;
