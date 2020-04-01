<template>
    <div id="menu" class="sidenav">
        <img src="../assets/profile.png" height="150px">
        <label>Bank: {{$store.state.score.money}}</label>
        <label>Bet: {{$store.state.score.bet}}</label>
        <label>Win: {{$store.state.score.win}}</label>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.sidenav {
  height: 100%;
  /* width: 200px; */
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgb(57, 6, 6);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav label {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav label:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav label{
    font-size: 18px;
  }
}
</style>