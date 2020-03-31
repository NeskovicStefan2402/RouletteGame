<template>
  <div class="home">
    <div class="row">
      <div class="col-1">
        <LeftMenu />
      </div>
      <div class="col-10">
      <Tabla /> 
      </div>
      <div class="col-1">
        <!-- <img src="../assets/games.png" height="50px"> -->
      </div>
    </div>
  </div>
</template>

<script>
import Tabla from '@/components/Tabla.vue'
import LeftMenu from '@/components/LeftMenu.vue'
export default {
  components: {
    Tabla,
    LeftMenu
  }
}
</script>
<style scoped>
.home{
  
  background-image: url('../assets/pozadina.jpg');
  height: 100%;
  position: fixed;
}
</style>