<template>
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper container">
              <div class="modal-container">
                  <div class="row">
                      <h4>How much money you want to add in your bank?</h4>
                  </div>
                  <br>
                  <div class="row">
                      <div class="col-3">
                          Money:
                      </div>
                      <div class="col-7">
                          <input type="text" class="form-control" v-model="chips">
                          <p><i>If you want to get more chips, your level points will be clear with that chips values, two times!</i></p>
                      </div>
                  </div>
                <div v-if="war" class="alert alert-warning alert-dismissible fade show">
                    <strong>Warning!</strong> You are lower level to get this money!
                    <!-- <button type="button" class="close" data-dismiss="alert">&times;</button> -->
                </div>
                <br>
                  <div class="row">
                      <div class="col-3">
                          <button class="form-control" @click="close()">Cancel</button>
                      </div>
                      <div class="col-6"></div>
                      <div class="col-3">
                          <button class="form-control" @click="add()">Add</button>
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
    data(){
        return{
            war:false,
            chips:0
        }
    },
    methods:{
        close(){
            eventBus.$emit('addChipsClose')
        },
        add(){
            var dug=this.debts()+parseInt(this.$store.state.debt)+parseInt(this.chips)*2
            var suma=this.wins()
            console.log('Suma je: '+suma)
            console.log('Dug je: '+dug)
            if(suma>=dug){
                this.$store.state.debt=parseInt(this.$store.state.debt)+parseInt(this.chips)
                this.$store.state.score.money=this.$store.state.score.money+this.$store.state.debt;
                this.$store.state.debt=parseInt(this.$store.state.debt)+parseInt(this.chips)

                this.close()
            }else{
                this.war=true
            }
        },
        debts(){
            var suma=0
            this.$store.state.debts.forEach(element => {
                suma=suma+parseInt(JSON.parse(element))
            });
            return suma 
        },
        wins(){
            var suma=0
            this.$store.state.score.history.forEach(element => {
                suma=suma+parseInt(JSON.parse(element).won)
            });
            return suma
        }
    }
}
</script>
<style scoped>
button {
  background-color: rgb(78, 74, 74);
  color: white;
}
.stanje{
    background-color: rgb(238, 76, 76);
    color: white;
    margin: 10px;
    /* padding: 10px; */
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 20%;
  width: 50%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
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
.modal-header {
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