import './form.css';
import { Formik, Form } from 'formik';
import { initialValues, schemas } from './helper';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import {Textarea} from '../Textarea/Textarea'

export function CustomForm({addTask}) {
    return (
        <Formik
            initialValues={initialValues}   
            validationSchema={schemas.custom}
            onSubmit={(values, { resetForm }) => {
                addTask(values);
                resetForm();
            } }
        >
            
            <Form className='form'>
                    <Input
                    label="Task title"
                    name="title"
                    id='title'
                    placeholder='Add task title'
                />
                <Textarea
                    label="Task description"
                    name="task"
                    id='task'
                    placeholder='Add task todo'
                />
                <Button>Add new task</Button>
            </Form>
        </Formik>
        
    )
}