<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
const isLogged = ref(sessionStorage.getItem("isLogged"));
const token = sessionStorage.getItem("token");

const route = useRoute();

const tripId = route.params.id;
const trip = ref("");

async function book(){
    try{
    const res = await axios.post("http://localhost:3000/api/registrations/"+tripId, { 'somejs': "" }, { headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }});
    console.log(res);
    }catch (error){
        console.log(error);
    }

}
onMounted( async() =>{
    try {
        const res = await axios.get("http://localhost:3000/api/trips/"+tripId);
        trip.value = res.data;
    }catch(error){
        console.log(error);
    }
})

</script>
<template>
    <h1>Trip info</h1><br>

    <p>Destination: {{ trip.Destination }}</p>
    

    <p>Places: {{ trip.Places }}</p>
    

    <p>Prix: {{ trip.Price }} €</p>

    <button v-if="isLogged" @click="book">Book</button>
    
</template>