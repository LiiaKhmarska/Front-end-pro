
export function Results({ winner }) {
    
    return (
        <div className="result-container">
            <h2> Результати голосування</h2>
            <h3>Переможець <p>{winner.emoji}</p></h3>

            <h3>Кількість голосів: { winner.count}</h3>
        </div>
    )
}