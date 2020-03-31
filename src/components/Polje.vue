<template>
        <button v-if="vrednost==null" :class="podatak.tip" class="form-control" @click="uvecaj()">
            <h5>{{podatak.broj}}</h5>
        </button>
        <button v-else class="odabrano form-control" @click="uvecaj()">
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
export default {
    props:[
        'podatak'
    ],
    data(){
        return {
            ulog:0
        }
    },
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
            if(this.$store.state.ruletOpen){
                alert('Ulaganje je zavrseno! ')
            }else{
                this.ulog+=this.$store.state.chip
                this.$store.dispatch('unesiUKombinaciju',this.podatak.broj)
                // alert('Izabran je broj: '+this.podatak.broj)
            }
        },
        odaberi(){
            if(this.$store.state.ruletOpen){
                alert('Ulaganje je zavrseno! ')
            }else{
                this.$store.dispatch('unesiUKombinaciju',this.podatak.broj)
                // alert('Izabran je broj: '+this.podatak.broj)
            }
        },
        izbaci(){
            if(this.$store.state.ruletOpen){
                alert('Ulaganje je zavrseno! ')
            }else{
                this.$store.dispatch('izbaciIzKombinacije',this.podatak.broj)
                // alert('Izbacen je broj: '+this.podatak.broj)
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
.check{
    border-radius: 50%;
    background: white;
    border: 10px solid yellow;
}
</style>