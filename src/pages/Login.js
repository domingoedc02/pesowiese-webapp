import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import axios from "axios";

const providers = [{ id: 'credentials', name: 'Email and password' }];
const url = "https://dev.server.gopesowise.com/api/auth/login"

const signIn = async (provider, formData) => {
    const promise = new Promise(async (resolve) => {
        try {
            const email = formData?.get('email');
            const password = formData?.get('password');
            const response = await axios.post(url,
                {
                    username: email,
                    password: password
                }
            )
            localStorage.setItem("accessToken", response.data.accessToken)
            localStorage.setItem("refreshToken", response.data.refreshToken)
            resolve()
            setTimeout(() => {

            }, 300);
        } catch (error) {
            console.log(error)
            resolve({
                type: 'CredentialsSignin',
                error: 'Invalid credentials.',
            });
        }
        setTimeout(() => {
            window.location.href = "/"
        }, 300);
    });
    return promise;
};

export default function Login() {
    const theme = useTheme();
    return (
        // preview-start
        <AppProvider theme={theme}>
            <SignInPage
                signIn={signIn}
                providers={providers}
                slotProps={{ emailField: { autoFocus: false } }}
            />
        </AppProvider>
        // preview-end
    );
}
