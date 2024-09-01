function useAuth() {
	const user = { isLoggedIn: true };
	return user && user.isLoggedIn;
}

export default useAuth;
