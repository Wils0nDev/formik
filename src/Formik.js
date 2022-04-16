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
      //initialValues -> nos permite capturar los valores de los campos del formulario
      name: "",
      lastname: "",
      email: "",
    },
    validate, //validate : validte -> recibo la funcion creada fuera  del App

    /////////////////////////////Este pedaso de codigo fue comentado para sacar la funcion validate fuera ////////////
    // validate: (values) => {  //este recibe los valores del formulario 
	  //   const errors = {}  //estos errores seran los que yo valla agregando en cada input

    //   //si el valor de name es vacío despues de haber tocado el campo (focus on)
		// 	//entonces nos dira que este campo es requerido.
    //   if(!values.name){
    //     errors.name = 'Requerido'
    //   }else if(values.name.length < 5){
    //     errors.name = 'El nombre es muy corto'
    //   }
		// 	return errors //retorno mis errores
    //},
    onSubmit: (values) => console.log(values), //onSubmit es otra propiedas que ejecuta el evento de submit en el formulario.
  });
  return (
    // handleSubmit -- > propiedad de formik que capturara todos los campos del formulario y lo enviara al evento onSubmit
    //handleChange --> captura lo que se va escribiendo dentro de cada input
    //values -> es el objeto que contiene cada elemento de nuestro formulario
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        value={formik.values.name}
      />
       {/*  errors es la propiedad de formik que contiene los errores
            eorrors.name en este caso name es REQUERIDO
         */}

      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>: null}
      <br />
      <label>LastName</label>
      <input
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        value={formik.values.lastname}
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
