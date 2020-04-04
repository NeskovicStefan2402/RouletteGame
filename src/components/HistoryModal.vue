<template>
  <transition name="modal">
    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="modal-mask">
            <div class="modal-wrapper container">
              <div class="modal-container">
                <div class="row">
                  <div class="col-11">
                    <h3>Bank history:</h3>
                  </div>
                  <button class="col-1 form-control" @click="close()">X</button>
                </div>
                <br>
                <div class="container">
                    <div class="row">
                        <label class="col-2 stanje form-control" v-for="i in $store.state.score.history.slice(0,30)">
                            {{JSON.parse(i).money}} RSD
                        </label>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </transition>
</template>
<script>
import eventBus from "../main";
export default {
  methods: {
    close() {
      eventBus.$emit("ugasi");
    }
  }
};
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
  /* left: 20%; */
  width: 80%;
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