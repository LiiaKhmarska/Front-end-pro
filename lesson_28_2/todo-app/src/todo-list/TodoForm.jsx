import { useFormik } from 'formik';
import {todoSchema} from './helper'



export function TodoForm({ addTask }) {


    const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    } = useFormik({
      initialValues: {
            todo:''
        },
        
         onSubmit: (values, action,errors) => {
             addTask(values.todo);
             action.resetForm();

        },
        
        validationSchema: todoSchema
  })


    return (
        
            <form  className="form js--form" name="form" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                    type="text"
                    id='todo'
                    className="form-control"
                    placeholder="Add new task..."
                    onChange={handleChange}
                     onBlur={handleBlur}
                    value={values.todo}
                    name="todo"
                />
                  {errors.todo && touched.todo && (
                 <span style={{ color: "red" }}> {errors.todo}</span>)}
                <button disabled={errors.todo} type='submit' className="btn btn-success">Add</button>
            </div>
            </form>
    
    )
}


