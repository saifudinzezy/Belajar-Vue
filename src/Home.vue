<template>
  <div>
    <!-- looping element menjadi 5 -->
    <!-- default value => server = 1 -->
    <app-serve-status v-for="server in 5">
    </app-serve-status>
  </div>
</template>

<script>
//import ServerStatus.vue
import ServerStatus from "./ServerStatus.vue"; //jgn lupa titik koma

export default {
  components: {
    //local component
    'app-serve-status': ServerStatus
  }
};
</script>
