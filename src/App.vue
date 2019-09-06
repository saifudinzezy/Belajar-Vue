<template>
<!-- root component and main.js-->
  <!-- <h2>Server Status: {{ status  }}</h2> -->
  <app-servers></app-servers>
</template>

<script>
export default {
  data: () => {
    return{
      status: 'Critical'
    }
  }
}
</script>
