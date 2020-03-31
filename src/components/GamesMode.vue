<template>
    <transition name="modal">
        <div class="modal-mask ">
            <div class="modal-wrapper container">
                <div class="modal-container">

                <div class="row">
                    <div class="col-11">
                        <h3>Select type of game!</h3>
                    </div>
                    <button class="col-1 form-control" @click="close()">
                        X
                    </button>
                </div>


                <div class="modal-body">
                    <slot name="body">
                        <img src="../assets/games.png" height="400px">
                    </slot>
                </div>

                    <div class="row">
                        <div class="col-3">
                            <button class="form-control" @click="orphelins()">
                                Orphelins
                            </button>
                        </div>

                        <div class="col-3">
                            <button class="form-control"  @click="small()">
                                Small Series
                            </button>
                        </div>

                        <div class="col-3">
                            <button class="form-control" @click="zero()" >
                                Zero Game
                            </button>
                        </div>

                        <div class="col-3">
                            <button class="form-control" @click="big()" >
                                Big Series
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div> 
    </transition>   
</template>
<script>
import eventBus from '../main'
export default {
    methods:{
        close(){
            eventBus.$emit('close')
        },
        orphelins(){
            var orphelins=[9,31,14,20,1,6,34,17]
            
            if(this.$store.state.score.money<this.$store.state.chip*orphelins.length){
                alert('Nemate dovoljno kredita!')
            }else{
                orphelins.forEach(element => {
                    this.$store.dispatch('unesiUKombinaciju',element)
                });
            }
            this.close()
        },
        small(){
            var small=[33,16,24,5,10,23,8,30,11,36,13,27]
            
            if(this.$store.state.score.money<this.$store.state.chip*small.length){
                alert('Nemate dovoljno kredita!')
            }else{
                small.forEach(element => {
                    this.$store.dispatch('unesiUKombinaciju',element)
                });
            }
            this.close()
        },
        big(){
            var big=[22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25]

            if(this.$store.state.score.money<this.$store.state.chip*big.length){
                alert('Nemate dovoljno kredita!')
            }else{
                big.forEach(element => {
                    this.$store.dispatch('unesiUKombinaciju',element)
                });
            }
            this.close()
        },
        zero(){
            var zero=[12,35,3,26,0,32,15]
            
            if(this.$store.state.score.money<this.$store.state.chip*zero.length){
                alert('Nemate dovoljno kredita!')
            }else{
                zero.forEach(element => {
                    this.$store.dispatch('unesiUKombinaciju',element)
                });
            }
            this.close()
        }   
    }
}
</script>
<style scoped>
button{
    background-color: rgb(78, 74, 74);
    color: white;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  /* width: 300px; */
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header{
  text-align: center;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>