import { useState } from "react";

function RegistrationForm() {
	const [username, setUsername] = useState("");
	const [emal, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMesage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!username || !email || !password) {
			setErrorMesage("All fields are required");
			return;
		}
         // Assume a function to send data to server here
        console.log('Submitted:', { username, email, password });
        setErrorMessage('');
        // Reset fields after submission
        setUsername('');
        setEmail('');
        setPassword('');
    };

	return (
		<form onSubmit={handleSubmit}
        {errorMessage && <p>{errorMessage}</p>}>
			<label htmlFor="">
				Username:
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</label>
			<label>
				Password:
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</label>

			<button type="submit">Register</button>
		</form>
	);
}

export default RegistrationForm;
