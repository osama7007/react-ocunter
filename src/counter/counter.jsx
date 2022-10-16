 function Counter({ decrement, increment, reset, counter }) {
		return (
			<div className='counter'>
				<button className='dec' onClick={decrement}>
					-
				</button>
				<span>{counter}</span>
				<button className='inc' onClick={increment}>
					+
				</button>
				<button className='reset' onClick={reset}>
					RESET
				</button>
			</div>
		);
 }

export default Counter