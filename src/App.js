import './App.css';
import React, { useState } from 'react';
import Counter from './counter/counter';

function App() {
     let [counter, setCounter] = useState(0);

			function increase() {
				setCounter(counter + 1);
			}
			function decrease() {
				if (counter > 0) {
					setCounter(counter - 1);
				}
			}

			function reset() {
				setCounter(counter = 0);
			}

  return (
		<div className='App'>
			<Counter
				increment={increase}
				decrement={decrease}
				reset={reset}
				counter={counter}
			/>
		</div>
	);
}

export default App;
