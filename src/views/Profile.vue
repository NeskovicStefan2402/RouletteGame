<template>
<div class="pozadina">
    <div class="row ">
        <div class="col-4">
            <img src="../assets/profile.png" height="300px">
        </div>
        <div class="col-8">
            <br>
            <br>
            <div class="row">
                <div class="col-3 headerPolje"><h5><b>{{now}} RSD</b></h5></div>
                <div class="col-3 headerPolje"><h5><b>{{bets}} RSD</b></h5></div>
                <div class="col-3 headerPolje"><h5><b>{{wons}} RSD</b></h5></div>
            </div>
        </div>
    </div>
    <div class="row" >
        <div class="col-4">
            <div class="polje" v-for="i in $store.state.score.history.slice(0,7)"><b>{{JSON.parse(i).money}} RSD</b></div>
            <div class="polje" ><b>...</b></div>
        </div>
        <div class="col-7 polje">
            <Grafikon/>
        </div>
    </div>
    
</div>
</template>
<script>
import Grafikon from '../components/LineGraph'
export default {
    components:{
        Grafikon
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
            return JSON.parse(this.$store.state.score.history[this.$store.state.score.history.length-1]).money
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