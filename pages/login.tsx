import { authApi } from 'axios-client';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
	async function handleLogin() {
		try {
			await authApi.login({
				username: 'test1',
				password: 'abc123',
			});
		} catch (error) {
			console.log('failed to login', error);
		}
	}
	async function handleGetProfile() {
		try {
			await authApi.getProfile();
		} catch (error) {
			console.log('failed to get profile', error);
		}
	}
	async function handleLogout() {
		try {
			await authApi.logout();
		} catch (error) {
			console.log('failed to logout', error);
		}
	}

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleGetProfile}>Get Profile</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
