<template>
    <button class="polje form-control"  @click="odaberi()">
        <h5>{{ele.text}}</h5>
    </button>
</template>
<script>
export default {
    props:[
        'ele'
    ],
    methods:{
        odaberi(){
            if(this.$store.state.score.money<this.$store.state.chip*12){
                alert('Nemate dovoljno kredita!')
            }else{
                this.$store.state.podaci.forEach(element => {
                    if(element.broj%3==this.ele.kod){
                        
                            this.$store.dispatch('unesiUKombinaciju',element.broj)  
                        
                    }
                });
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
    /* padding-top: 15px; */
    color: white;
    height: 80px;
    /* transform: rotate(90deg); */
}
</style>