<template>
<div>
    <div class="progress" v-if="$store.state.ruletOpen==false">
        <div class="progress-bar progress-bar-striped active" role="progressbar" :aria-valuenow="brojac" aria-valuemin="0" aria-valuemax="30" :style="{'width': `${brojac*3.33}%`}">
        </div>
      </div>
      <router-view></router-view>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            brojac:0,
            completed:true
        }
    },
    created(){
        this.$store.dispatch('obrisiSve')
        this.pokreni()
    },
    methods:{
        pokreni(){
            this.$store.dispatch('zatvoriRulet')
            this.brojac=0
            let vm=this
            // var id = setInterval(function()
            // {
            //     vm.brojac++;
            //     console.log(vm.brojac)
            //     if(vm.brojac==31)
            //     {
            //         // vm.brojac=0;
            //         vm.$store.dispatch('pokreniRulet')
            //         var broj=Math.floor(Math.random()*37)
            //         vm.$store.dispatch('izvuciBroj',broj)
            //         vm.$router.push('/roulette')
            //         clearInterval(id);
            //     }
            // }, 500);
        }
    }
}
</script>
<style scoped>

</style>