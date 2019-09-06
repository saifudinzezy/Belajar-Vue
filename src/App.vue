<template>
  <!-- <h2>Server Status: {{ status  }}</h2> -->
  <app-server-status></app-server-status>
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
