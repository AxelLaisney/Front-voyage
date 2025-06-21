<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

const trips = ref([]);

 onMounted(async() => {
    try{
        const res = await axios.get("http://localhost:3000/api/trips");
        trips.value = res.data;

    }catch (error){
        console.log(error)
    }
})
</script>
<template>
    <div class="main">
        <h1>List of trips</h1><br>
        <table>
            <thead>
            <tr>
                <th>Destination</th>
                <th>Places</th>
                <th>Prix</th>
                <th>Button</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="trip in trips" :key="trips">
                <td>{{ trip.Destination }}</td>
                <td>{{ trip.Places }}</td>
                <td>{{ trip.Price }} €</td>
                <td><RouterLink :to="{ name: 'tripInfos', params: { id: trip.ID }}" class="button-link">Infos</RouterLink></td>   
            </tr>
            </tbody>

        </table>
    </div>

</template>
<style>
.main {
    display: flex;
    flex-direction: column;
}

td, th {
    text-align: center;
}


</style>