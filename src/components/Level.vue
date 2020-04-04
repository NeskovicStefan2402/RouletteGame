<template>
    <div class="row">
        <div class="col-4 " :style="{'color':color}">
            <label > Level: <b>{{Math.trunc(level/1000)}}</b> </label>
        </div>
        <div class="col-8">
            <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" :aria-valuenow="0" aria-valuemin="0" aria-valuemax="30" :style="{'width': `${(level%1000)/10}%`}">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'color'
    ],
    computed:{
        wons(){
            var suma=0;
            this.$store.state.score.history.forEach(element => {
                suma=suma+parseInt(JSON.parse(element).won)
            });
            return suma
        },
        debts(){
            var suma=0;
            console.log('Level debts: '+this.$store.state.debts)
            this.$store.state.debts.forEach(element => {
                suma=suma+parseInt(element)
            });
            return suma
        },
        level(){
            console.log('Level wons: '+this.wons)
            console.log('Level debts: '+this.debts)
            return this.wons-this.debts<0 ? 0 : this.wons-this.debts
        }
    }
}
</script>
<style scoped>

</style>