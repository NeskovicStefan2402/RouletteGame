<template>
<div class="pozadina">
    <div class="row">
        <div class="col-2">
            <router-link tag="button" to='/' class="back form-control"><- Back</router-link>
        </div>
    </div>
    <div class="row ">
        <div class="col-4">
            <img src="../assets/profile.png" height="300px">
            <Level color='black'/>
            <br>
        </div>
        <div class="col-8">
            <br>
            <br>
            <div class="row">
                <div class="col-3 headerPolje"><h5><b>{{now}} RSD</b></h5></div>
                <div class="col-3 headerPolje"><h5><b>{{bets}} RSD</b></h5></div>
                <div class="col-3 headerPolje"><h5><b>{{wons}} RSD</b></h5></div>
            </div>
            <br>
            <div class="row">
                <div class="col-3"><h2>Bank</h2></div>
                <div class="col-3"><h2>Total bets</h2></div>
                <div class="col-3"><h2>Total wins</h2></div>
            </div>
        </div>
    </div>
    <div class="row" >
        <div class="col-4">
            <div class="polje" v-for="i in $store.state.score.history.slice(0,7)"><b>{{JSON.parse(i).money}} RSD</b></div>
            <div class="polje" @click="modal=true" ><b>...</b></div>
            <History v-if="modal"/>
        </div>
        <div class="col-7 polje">
            <Grafikon/>
        </div>
    </div>
    
</div>
</template>
<script>
import Grafikon from '../components/LineGraph'
import History from '../components/HistoryModal'
import Level from '../components/Level'
import eventBus from '../main'
export default {
    components:{
        Grafikon,
        History,
        Level
    },
    data(){
        return{
            modal:false
        }
    },
    mounted(){
        eventBus.$on('ugasi',ele=>{
            this.modal=false;
        })
    },
    created(){
        this.$store.dispatch('updateProfile')
    },
    destroyed(){
        this.$store.dispatch('updateProfile')
    },
    computed:{
        bets(){
            var suma=0;
            this.$store.state.score.history.forEach(element => {
                suma=suma+parseInt(JSON.parse(element).bet)
            });
            return suma
        },
        wons(){
            var suma=0;
            this.$store.state.score.history.forEach(element => {
                suma=suma+parseInt(JSON.parse(element).won)
            });
            return suma
        },
        now(){
            return JSON.parse(this.$store.state.score.money)
        }
    }
}
</script>
<style scoped>
.polje{
    background-color: white;
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
    text-align: center;
    /* box-shadow: 10px 10px 10px -5px rgba(0, 0, 0, 0.367); */
    box-shadow: 10px 10px 94px -7px rgba(0,0,0,0.39);
}
.back {
  background-color: rgb(78, 74, 74);
  color: white;
}
.headerPolje{
    background-color: rgb(213, 208, 255);
    border-radius: 30px;
    margin: 5px;
    padding: 50px;
    text-align: center;
    /* box-shadow: 10px 10px 10px -5px rgba(0, 0, 0, 0.367); */
    box-shadow: 10px 10px 94px -7px rgba(0,0,0,0.39);
}

.pozadina{
    padding: 50px;
    background-color: rgb(194, 193, 193);
}
</style>