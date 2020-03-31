<template>
    <button class="polje"  @click="odaberi()">
        <h5>{{ele.text}}</h5>
    </button>
</template>
<script>
export default {
    props:[
        'ele'
    ],
    data(){
        return{
            odabrao:false
        }
    },
    methods:{
        odaberi(){
            this.$store.state.podaci.forEach(element => {
                if(element.broj%3==this.ele.kod){
                    if(this.odabrao){
                        this.$store.dispatch('izbaciIzKombinacije',element.broj)
                    }else{
                        this.$store.dispatch('unesiUKombinaciju',element.broj)
                    }  
                }
            });
            this.odabrao=!this.odabrao;
        }
    }
}
</script>
<style scoped>
.polje{
    background: transparent;
    border: 1px solid white;
    text-align: center;
    /* padding: 5px; */
    color: white;
    height: 80px;
    /* transform: rotate(90deg); */
}
</style>