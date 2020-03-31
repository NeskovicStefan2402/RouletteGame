<template>
  <div class="home">
    <div class="row">
      <div class="col-1">
        <LeftMenu />
      </div>
      <div class="col-9">
      <Tabla /> 
      </div>
      <div class="col-2">
        <!-- <img src="../assets/games.png" height="50px"> -->
        <Score/>
      </div>
    </div>
  </div>
</template>

<script>
import Tabla from '@/components/Tabla.vue'
import Score from '@/components/Score.vue'
import LeftMenu from '@/components/LeftMenu.vue'
export default {
  components: {
    Tabla,
    LeftMenu,
    Score
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