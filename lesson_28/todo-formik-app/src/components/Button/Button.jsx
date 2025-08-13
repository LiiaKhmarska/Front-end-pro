import './button.css'

export function Button ({children}){
    return (
        <button type='submit' className='button'>
            {children}
        </button>
    )
}