<template>
    <div>
      <h2>Welcome, {{ user.username }}!</h2>
      <p>Your email: {{ user.email }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    user: Object
  });
  </script>
  