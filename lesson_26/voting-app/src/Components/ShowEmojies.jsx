import emojies from '../emojies.json'
export function ShowEmojies({ counter, handleCounter }) {      
    return (
        <div className='emojies-container'>
            <ul>
                    {emojies.map(item => (
                        <li key={item.id} onClick={()=>{handleCounter(item.id)}}>
                            {item.emoji}
                            <div className="showCount">{ counter.find(emo =>emo.id === item.id).count}</div>
                        </li>
                    ))}
          </ul>
        </div>
    )
}