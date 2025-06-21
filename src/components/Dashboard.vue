<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const trips = ref([]);
const token = sessionStorage.getItem("token");

async function Pay(regId){
    try{
        const res = await axios.post("http://localhost:3000/api/payments/"+regId, { 'somejs': "" }, { headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }});
    console.log(res);
    }catch (error){
        console.log(error)
    }
}



onMounted(async() => {
    try{
        const res = await axios.get("http://localhost:3000/api/registrations/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        trips.value = res.data

    }catch (error){
        console.log(error);
    }});
</script>
<template>
    <h3>Registration</h3>
    <table>
        <thead>
            <tr>
                <th>Destination</th>
                <th>Places</th>
                <th>Price</th>
                <th>Registrations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="trip in trips" :key="trip">
                <td>{{ trip.Destination }}</td>
                <td>{{ trip.Places }}</td>
                <td>{{ trip.Price }} €</td>
                <td><li v-for="reg in trip.Registrations" :key="reg">Reg ID: {{ reg.ID }} <button class="button-link" @click="Pay(reg.ID)">Payer</button><RouterLink :to="{ name: 'document', params: { id: reg.ID }}" class="button-link">document</RouterLink></li></td>
            </tr>
        </tbody>
    </table><br>
    <h3>Upload a document</h3>
</template>

<style>
th, td {
    text-align: center;
}

table {
    width: 100%;
}
</style>