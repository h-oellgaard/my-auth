<template>
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '../services/firebase.service';   
const username = ref('');
const password = ref('');
const user = ref(null);
const handleLogin = () => {
    login(username.value, password.value).then(e => {
        console.log('Logged in successfully', e.email);
        
    }).catch((error) => {
        console.error('Error logging in:', error);
    });
    console.log('Username:', username.value);
    console.log('Password:', password.value);
};
</script>

<style scoped>
.login {
    max-width: 300px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login h2 {
    text-align: center;
}

.login div {
    margin-bottom: 1em;
}

.login label {
    display: block;
    margin-bottom: 0.5em;
}

.login input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}

.login button {
    width: 100%;
    padding: 0.5em;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login button:hover {
    background-color: #0056b3;
}
</style>
