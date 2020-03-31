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
            this.$store.state.podaci.forEach(element => {
                if(element.tip==this.podatak.color){
                    if(this.odabrao){
                        this.$store.dispatch('izbaciIzKombinacije',element.broj)
                    }else{
                        this.$store.dispatch('unesiUKombinaciju',element.broj)
                    }
                }
            });
            this.odabrao=!this.odabrao;
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
            this.odabrao=!this.odabrao
        },
        parni(){
            for (let i = 0; i <= this.podatak.max; i+=2) {
                if(this.odabrao){
                    this.$store.dispatch('izbaciIzKombinacije',i)
                }else{
                    this.$store.dispatch('unesiUKombinaciju',i)
                }
            }
        },
        neparni(){
            for (let i = 1; i <= this.podatak.max; i+=2) {
                if(this.odabrao){
                    this.$store.dispatch('izbaciIzKombinacije',i)
                }else{
                    this.$store.dispatch('unesiUKombinaciju',i)
                }
            }
        },
        ostali(){
            for (let i = this.podatak.min; i <= this.podatak.max; i++) {
                if(this.odabrao){
                    this.$store.dispatch('izbaciIzKombinacije',i)
                }else{
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