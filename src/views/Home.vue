<template>
  <div class="home">
    <div class="row">
      <div class="col-1">
        <LeftMenu />
      </div>
      <div class="col-9">
      <Tabla />
      <ChipModal v-if="addChips"/> 
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
import ChipModal from '@/components/ChipModal.vue'
import eventBu from '../main'
import eventBus from '../main'
export default {
  components: {
    Tabla,
    LeftMenu,
    Score,
    ChipModal
  },
  data(){
    return{
      addChips:false
    }
  },
  mounted(){
    eventBus.$on('addChipsClose',ele=>{
      this.addChips=false
    });
    eventBus.$on('addChipsOpen',ele=>{
      this.addChips=true
    });
  }
}
</script>
<style scoped>
.home{
  
  background-image: url('../assets/pozadina.jpg');
  position: fixed; 
  top: 0; 
  left: 0; 
	
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
</style>