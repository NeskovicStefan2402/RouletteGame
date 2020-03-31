<template>
    <div class="row">
        <label v-for="i in $store.state.istorija.slice(0,12)" class="col-1 form-control broj">
            <h5>{{i}}</h5>
        </label>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.broj{
    background-color: transparent;
    color: white;
}
</style>