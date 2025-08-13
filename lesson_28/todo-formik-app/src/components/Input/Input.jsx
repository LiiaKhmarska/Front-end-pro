import './input.css';
import { Field, ErrorMessage as Error } from 'formik';

export function Input({id, label, name, placeholder}) {
    return (
        <div className='input-container'>
            <label htmlFor={id}>{ label}</label>
            <Field name={name} id={id} placeholder={placeholder} />
            <Error name={name}>{(error) => <span>{ error}</span>}</Error>
        </div>
    )
}