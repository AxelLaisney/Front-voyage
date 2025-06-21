<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { reactive } from 'vue';

const formData = reactive({
    email: "",
    password: ""
});

const router = useRouter();

async function handleSubmit (){

    try{
        const res = await axios.post(
            "http://localhost:3000/api/auth/login",
            formData
        )
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('isLogged', true);
        router.push("/");
    }catch (error){

    }
}

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <label>Email</label><br>
        <input type="text" v-model="formData.email"><br><br>
        <label>Password</label><br>
        <input type="text" v-model="formData.password"><br>
        <button type="submit">submit</button>
    </form><br>

</template>