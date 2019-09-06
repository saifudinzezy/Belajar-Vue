<template>
<!-- harus memiliki pembungkus dan hanya boleh memlikik 1 root template -->
  <div>
    <p>Server Status: {{ status }}</p>
    <hr />
    <button @click="chengeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Critical"
    };
  },
  methods: {
    //penulisan fungsi dengan es-6
    chengeStatus() {
      this.status = "Normal"; //jgn lupa titik koma
    }
  }
};
</script>
