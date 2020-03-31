<template>
    <button v-if="podatak.color==null" class="polje" @click="odaberi()">
        <h3>{{podatak.text}}</h3>
    </button>
    <button v-else class="polje">
        <img :src="require('../assets/'+podatak.color+'.png')" @click="obojeni()">
    </button>
</template>
<script>
export default {
    props:[
        'podatak'
    ],
    data(){
        return{
            odabrao:false
        }
    },
    methods:{
        obojeni(){
            if(this.$store.state.score.money<this.$store.state.chip*18){
                    alert('Nemate dovoljno kredita!')
            }else{
                this.$store.state.podaci.forEach(element => {
                    if(element.tip==this.podatak.color){
                        this.$store.dispatch('unesiUKombinaciju',element.broj)
                    }
                });
            }
        },
        odaberi(){
            if(this.podatak.even==null){
                this.ostali()
            }else{
                if(this.podatak.even==true){
                    this.parni()
                }else{
                    this.neparni()
                }
            }
        },
        parni(){
            if(this.$store.state.score.money<this.$store.state.chip*18){
                alert('Nemate dovoljno kredita!')
            }else{
                for (let i = 0; i <= this.podatak.max; i+=2) {
                    this.$store.dispatch('unesiUKombinaciju',i)
                }
            }
        },
        neparni(){
            if(this.$store.state.score.money<this.$store.state.chip*18){
                alert('Nemate dovoljno kredita!')
            }else{
                for (let i = 1; i <= this.podatak.max; i+=2) {
                    this.$store.dispatch('unesiUKombinaciju',i)
                }
            }
        },
        ostali(){
            if(this.$store.state.score.money<this.$store.state.chip*(this.podatak.max-this.podatak.min)){
                alert('Nemate dovoljno kredita!')
            }else{
                for (let i = this.podatak.min; i <= this.podatak.max; i++) {
                    this.$store.dispatch('unesiUKombinaciju',i)
                }
            }
        }

    }
}
</script>
<style scoped>
.polje{
    background: transparent;
    border: 1px solid white;
    text-align: center;
    color: white;
    height: 80px;
}
</style>