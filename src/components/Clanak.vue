<template>
    <div v-if="lista=='[]'">
        <h3><b>{{naslov}}</b></h3>
        <p><i>{{text}}</i></p>
    </div>  
    <div v-else>
        <h3><b>{{naslov}}</b></h3>
        <ol>
            <li v-for="i in lista.split(',')"><p>{{i.replace("'","").replace("'","")}}</p></li>
            
        </ol> 
    </div>  
</template>
<script>
export default {
    props:[
        'naslov',
        'text',
        'lista'
    ]
}
</script>
<style scoped>

</style>