<template>
    <a v-if="open==false" @mouseover="openNav()" style="font-size:30px;cursor:pointer; color:white;">&#9776;</a>
    <div v-else id="menu" class="sidenav" @mouseleave="closeNav()">
        <label  class="closebtn" @click="closeNav()">&times;</label>
        <!-- <label  >Profile</label > -->
        <router-link tag='label' to='/profile' @click.native="clearBet()">Profile</router-link>
        <router-link tag='label' to='/rules' @click.native="clearBet()">Rules</router-link>
        <label @click="addChip()">Add chips</label >
        <label  @click="exit()">Exit</label >
    </div>
</template>
<script>
import eventBus from '../main'
export default {
    data(){
        return{
            open:false
        }
    },
    methods:{
        closeNav(){
            this.open=false
        },
        clearBet(){
          console.log('Clear bet...')
           this.$store.dispatch('obrisiSve')
        },
        openNav(){
            this.open=true
        },
        addChip(){
          eventBus.$emit('addChipsOpen')
        },
        exit(){
          this.clearBet()
          window.location.href = 'http://www.google.com';
        }
    }
};
</script>
<style scoped>
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav label {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav label:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav label{
    font-size: 18px;
  }
}
</style>