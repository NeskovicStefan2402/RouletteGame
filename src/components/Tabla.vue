<template>
<div style="padding-top: 30px;">
    <div class="tabla">
        <GamesMode v-if="modal"/>
        <History />
        <br>
        <timer></timer>
        <br>
        <div class="row">
        <div class="col-1">
            <polje :podatak="$store.state.leftData"></polje>
            <br>
            <button id='chip' @click="uvecaj()">{{$store.state.chip}}</button>
        </div>
        <div class="col-10">
            <div class="row">
            <polje v-for="i in $store.state.podaci" :podatak='i' class="col-1"></polje>
            </div>
            <div class="row">
                <foo1 v-for="i in $store.state.footerData" :podatak='i' class="col-4"></foo1>
            </div>
            <div class="row">
                <foo1 v-for="i in $store.state.footerData2" :podatak='i' class="col-2"></foo1>
            </div>
        </div>
        <div class="col-1">
            <right class="row" v-for="i in $store.state.rightData" :ele='i'></right>
            <br>
            <img src="../assets/games.png" height="70px" @click="modal=true">
            <br>
            <img src="../assets/delete.png" class="row delete" @click="obrisiSve()">
        </div>
        </div>
    </div>
</div>    
</template>
<script>
import eventBus from '../main'
import Polje from './Polje'
import FooPolje from './FooPolje'
import RightPolje from './RightPolje'
import Timer from './Timer'
import GamesMode from './GamesMode'
import History from './History'
export default {
    components:{
        polje:Polje,
        foo1:FooPolje,
        right:RightPolje,
        timer:Timer,
        GamesMode,
        History
    },
    data(){
        return{
            modal:false
        }
    },
    mounted(){
        // this.$store.dispatch('obrisiSve')
        eventBus.$on('close',ele=>{
            console.log('Closed')
            this.modal=false
        })
    },
    methods:{
        obrisiSve(){
            this.$store.dispatch('obrisiSve')
        },
        uvecaj(){
            this.$store.dispatch('updateChip')
        }
    }
}
</script>
<style scoped>
.tabla{
    background-color: rgba(2, 68, 2, 0.85);
    padding: 30px;
}
.delete{
    color: white;
    height: 50px;
    margin: 10px;
}
#chip{
    border-radius: 50%;
    /* position: fixed; */
    background: white;
    border: 10px solid yellow;
}
</style>