<template>
        <button v-if="vrednost==null" :class="podatak.tip" class="form-control" @click="uvecaj()">
            <h5>{{podatak.broj}}</h5>
        </button>
        <button v-else :class="parseInt(podatak.broj)==0 ? 'odabrano0' : 'odabrano'" class=" form-control" @click="uvecaj()">
            <div class="row">
                <div class="col-6">
                    <h5>{{vrednost.broj}}</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-6"></div>
                <div class="check col-6">
                    <h5>{{vrednost.chip}}</h5>
                </div>
            </div>
        </button>
</template>
<script>
import eventBus from '../main'
export default {
    props:[
        'podatak'
    ],
    create(){
        console.log(this.$store.dispatch('includeElement',this.podatak.broj))
    },
    computed:{
        vrednost(){
            var ele=null;
            this.$store.state.kombinacija.forEach(element => {
                if(element.broj==this.podatak.broj){
                    ele=element
                }
            });
            return ele
        }
    },
    methods:{
        includeElement(){
            console.log('Provera...')
            this.$store.state.kombinacija.forEach(element => {
                if(element.broj==this.podatak.broj){
                    console.log('True ')
                    return true
                }
            });
            return false
        },
        uvecaj(){
            if(this.$store.state.deleteOption){
                this.$store.dispatch('izbaciIzKombinacije',this.podatak.broj)
            }else{
                if(this.$store.state.score.money<this.$store.state.chip){
                    alert('Nemate dovoljno kredita!')
                }else{
                    if(this.$store.state.ruletOpen){
                        alert('Ulaganje je zavrseno! ')
                    }else{
                        this.$store.dispatch('unesiUKombinaciju',this.podatak.broj)
                        // alert('Izabran je broj: '+this.podatak.broj)
                    }
                }
            }
        }
    }
}
</script>
<style scoped>
.crveno{
    background-color: red;
    text-align: center;
    color: white;
    height: 80px;
}
.crno{
    background: black;
    text-align: center;
    color: white;
    height: 80px;
}
.ostalo{
    background: transparent;
    border: 1px solid white;
    text-align: center;
    color: white;
    height: 240px;
}
.odabrano{
    background-color: goldenrod;
    text-align: center;
    height: 80px;
}
.odabrano0{
    background-color: goldenrod;
    text-align: center;
    height: 240px;
}
.check{
    border-radius: 50%;
    background: white;
    border: 10px solid yellow;
}
</style>