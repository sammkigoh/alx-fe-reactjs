import { useState } from "react";
// import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";
import "./App.css";

function App() {
	return (
		<div>
			<h1>User Registration with Formik</h1>
			{/* <RegistrationForm /> */}
			<FormikForm />
		</div>
	);
}

export default App;
