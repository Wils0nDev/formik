//Aqui crearemos un componente cutomizado uando Formik
//useFied = es un hook de React personalizado que nos permite crear elementos y conectarlas con Formik
//con esto podemos crear nuestras porpias entradas personalizadas


import { useField  } from "formik";

//recibimos 
// - label : que sera el titulo del campo.
// - ...props : el resto de propiedades. 
const TextInput = ({label, ...props}) => {

        const [field, meta] = useField(props)
        
       // console.log({field, meta})
        return(

        <div>
            <label>{label}</label>
            <input  {...field} {...props}  />
            {meta.touched && meta.error ? <div>{meta.error}</div>: null}
        </div>

        )

}

export default TextInput;