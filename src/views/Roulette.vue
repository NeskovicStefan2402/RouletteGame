<template>
  <div>
      
    <video id='video' muted  autoplay>
        <source src="../assets/videos/roulette.mp4" type="video/mp4">
    </video>
    <div class="row">
          <div class="col-7"></div>
          <div class="col-2">
              <div id='brojDiv' class="form-control" >
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
export default {
    created(){
        setTimeout(() => {
            document.getElementById('brojDiv').style.visibility='visible'

            setTimeout(() => {
                console.log('Vracam se u home...')
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
    position: fixed;
    margin-top: 130px;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    visibility: hidden;
    background: rgba(255, 255, 255, 0.8);
    padding-top: 30px;
    color: #000000;
    
}
</style>