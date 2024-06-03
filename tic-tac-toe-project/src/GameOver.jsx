export const GameOver = ({winner, onRestart}) => {
    return (<div id="game-over">
        <h2>Game over</h2>
        {winner && <p>You won, {winner}</p>}
        {!winner && <p>It's a draw!</p>}
        <button onClick={onRestart}>Restart!</button>
    </div>)
}
