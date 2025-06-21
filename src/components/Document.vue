<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const token = sessionStorage.getItem("token");
const route = useRoute();
const router = useRouter();
const regId = route.params.id;
const docType = ref("");

async function handleSubmit (){
    console.log(docType)
    try{
        const res = await axios.post(
            "http://localhost:3000/api/documents/"+regId, {type: docType.value}, { 
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }
        );
        console.log(res);
        router.push("/dashboard");
    }catch (error){
        console.log(error)
    }
}
</script>
<template>
    <h1> Documents</h1>
    <h3>Submit a document</h3>
    <form @submit.prevent="handleSubmit">
    <select name="doctype" v-model="docType">
        <option value="PASSPORT">PASSPORT</option>
        <option value="VACCINE">VACCINE</option>
    </select>
    <button type="submit">Submit document</button>
</form>
</template>