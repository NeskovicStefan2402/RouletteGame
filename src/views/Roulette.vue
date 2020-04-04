<template>
  <div>
    <video id='video' muted  autoplay>
        <source src="../assets/videos/roulette.mp4" type="video/mp4">
    </video>
    <div class="row">
          <div class="col-7"></div>
          <div class="col-2">
                <div id='brojDiv' class="form-control animated" >
                    <h3 id="broj">
                        {{$store.state.istorija[0]}}
                    </h3>
                </div>
          </div>
          <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import eventBus from '../main'
export default {
    created(){
        setTimeout(() => {
            
            document.getElementById('brojDiv').classList.add("slideInUp")
            document.getElementById('brojDiv').style.visibility='visible'
            setTimeout(() => {
                this.$router.push('/')
            }, 2000);
        }, 12000);
    }
};
</script>
<style scoped>
#video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
#brojDiv{
    display:block;
    background: black;
    border-radius: 100%;
    height: 100px;
    width: 100px;
    margin: 0;
    background: radial-gradient(circle at 100px 100px, #ffffff, #000);
    margin-top: 130px;
    position: fixed;
    visibility: hidden;
    padding-top: 30px;
    border: none;
    color: white;
    /* position: fixed;
    
    border-radius: 50%;
    height: 100px;
    width: 100px;
    visibility: hidden;
    background: rgba(255, 255, 255, 0.8);
    padding-top: 30px;
    color: #000000; */
    
}
</style>