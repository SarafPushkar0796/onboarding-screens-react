import './App.css';
import 'bs-stepper/dist/css/bs-stepper.css'
import 'bs-stepper/dist/js/bs-stepper'
import React from 'react';
import StepperForm from './StepperForm';

function App() {	

	return (
		<div className="App">

			{/* BS stepper */}
			<StepperForm />
		</div>
	);
}

export default App;
