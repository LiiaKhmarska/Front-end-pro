import './textarea.css';
import { Field, ErrorMessage as Error } from 'formik';

export function Textarea({id, label, name, placeholder}) {
    return (
        <div className='text-container'>
            <label htmlFor={id}>{ label}</label>
            <Field name={name} id={id} placeholder={placeholder} as="textarea"/>
            <Error name={name}>{(error) => <span>{ error}</span>}</Error>
        </div>
    )
}