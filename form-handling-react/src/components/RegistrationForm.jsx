import { useState } from "react";

function RegistrationForm() {
	const [username, setUsername] = useState("");
	const [emal, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
        let newErrors = {};

		if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors). length>0) {
            setErrors(newErrors);
            return;
        } 
         // Assume a function to send data to server here
        console.log('Submitted:', { username, email, password });
        setErrorMessage('');
        // Reset fields after submission
        setUsername('');
        setEmail('');
        setPassword('');
        setErrors({});
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
                {errors.username && <p>{errors.username}</p>}
			</label>
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
                {errors.email && <p>{errors.email}</p>}
			</label>
			<label>
				Password:
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
                {errors.password && <p>{errors.password}</p>}
			</label>

			<button type="submit">Register</button>
		</form>
	);
}

export default RegistrationForm;
