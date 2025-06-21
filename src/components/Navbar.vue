<script setup>
import { ref } from 'vue';
const isLogged = ref(sessionStorage.getItem("isLogged"));
</script>
<template>
    <div class="navbar">
        <a href="/" class="button-link buttons">Home</a>
        <a href="/login" class="button-link buttons">Login</a>
        <a href="/dashboard" class="button-link buttons" v-if="isLogged">dashboard</a>
    </div>

</template>

<style>
.navbar {
    display: flex;

}

.buttons {
    margin-right: 10px;
}
.button-link {
  display: inline-block;
  padding: 0.75em 1.5em;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 0.375em;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.button-link:hover {
  background-color: #0056b3;
}</style>