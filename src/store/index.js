import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
            score:{
              money:1000,
              bet:0,
              win:0
            },
            deleteOption:false,
            chip:1,
            istorija:[],
            ruletOpen:false,
            kombinacija:[],
            podaci:[
                {broj:3,tip:'crveno'},{broj:6,tip:'crno'},{broj:9,tip:'crveno'},{broj:12,tip:'crveno'},{broj:15,tip:'crno'},{broj:18,tip:'crveno'},
                {broj:21,tip:'crveno'},{broj:24,tip:'crno'},{broj:27,tip:'crveno'},{broj:30,tip:'crveno'},{broj:33,tip:'crno'},{broj:36,tip:'crveno'},
                {broj:2,tip:'crno'},{broj:5,tip:'crveno'},{broj:8,tip:'crno'},{broj:11,tip:'crno'},{broj:14,tip:'crveno'},{broj:17,tip:'crno'},
                {broj:20,tip:'crno'},{broj:23,tip:'crveno'},{broj:26,tip:'crno'},{broj:29,tip:'crno'},{broj:32,tip:'crveno'},{broj:35,tip:'crno'},
                {broj:1,tip:'crveno'},{broj:4,tip:'crno'},{broj:7,tip:'crveno'},{broj:10,tip:'crno'},{broj:13,tip:'crno'},{broj:16,tip:'crveno'},
                {broj:19,tip:'crveno'},{broj:22,tip:'crno'},{broj:25,tip:'crveno'},{broj:28,tip:'crno'},{broj:31,tip:'crno'},{broj:34,tip:'crveno'},
                ],
            footerData:[
               {
                   text:'1st 12',
                   max:12,
                   min:1,
                   even:null
               },
               {
                   text:'2nd 12',
                   max:24,
                   min:13,
                   even:null
               },
               {
                   text:'1rd 12',
                   max:36,
                   min:25,
                   even:null
               }
            ],
            footerData2:[
                {
                   text:'1-18',
                   max:18,
                   min:1,
                   color:null,
                   even:null
               },
               {
                   text:'EVEN',
                   max:36,
                   min:1,
                   color:null,
                   even:true
               },
               {
                   color:'crveno'
               },
               {
                   color:'crno'
               },
               {
                   text:'ODD',
                   max:36,
                   min:1,
                   color:null,
                   even:false
               },
               {
                   text:'19-36',
                   max:36,
                   min:19,
                   color:null,
                   even:null
               }
            ],
            leftData:{
                broj:0,
                tip:'ostalo'
            },
            rightData:[
              {
                text:'2 to 1',
                kod:0
              },
              {
                text:'2 to 1',
                kod:2
              },
              {
                text:'2 to 1',
                kod:1
              },
            ]
  },
  mutations: {
    'UPRAVLJAJ_RULETOM'(state,param){
      if(param==false){
        state.kombinacija=[]
        state.score.bet=0
      }
      state.ruletOpen=param;
    },
    'UNESI_U_KOMBINACIJU'(state,kombinacija){
      

      var brojac=-1;
      for (let i = 0; i < state.kombinacija.length; i++) {
        if(state.kombinacija[i].broj==kombinacija)
        brojac=i
      }
      if(brojac!=-1){
        state.kombinacija[brojac].chip+=state.chip
      }else{
      var ele={
        broj:kombinacija,
        chip:state.chip
      }
      console.log('Dodaje...')
      state.kombinacija.push(ele)   
    } 
    state.score.bet=state.score.bet+state.chip
    state.score.money=state.score.money-state.chip
    },

    'IZBACI_IZ_KOMBINACIJE'(state,kombinacija){
      for (let i = 0; i < state.kombinacija.length; i++) {
        if(state.kombinacija[i].broj==kombinacija){
          state.score.bet=state.score.bet-state.kombinacija[i].chip
          state.score.money=state.score.money+state.kombinacija[i].chip
          state.kombinacija.splice(i,1)
          return
        }
      }
    },
    'ISPRAZNI_KOMBINACIJU'(state){
      console.log('Praznjenje kombinacije')
      state.score.money=state.score.money+state.score.bet
      state.score.bet=0
      state.kombinacija=[]
    },

    'IZVUCI_BROJ'(state,broj){
      state.istorija.unshift(broj)
      var won=0;
      state.kombinacija.forEach(element => {
        if(broj==element.broj){
          won=36*element.chip;
        }
      });
      console.log(won)
      state.score.win=won;
      console.log(state.score.win)
      state.score.money=state.score.money+state.score.win;
      console.log(state.score.money)
    },
    'INCLUDE'(state,broj){
      state.kombinacija.forEach(element => {
        if(element.broj==broj){
          return element
        }
      });
      return null
    }
    ,
    'UPDATE_CHIP'(state){
      switch (state.chip) {
        case 1:
          state.chip=2
          break;
        case 2:
          state.chip=5
          break;
        case 5:
          state.chip=10
          break;
        case 10:
          state.chip=1
          break;
        default:
          state.chip=1
          break;
      }
    }
  },
  actions: {
    pokreniRulet({commit}){
      commit('UPRAVLJAJ_RULETOM',true)
    },
    zatvoriRulet({commit}){
      commit('UPRAVLJAJ_RULETOM',false)
      // commit('ISPRAZNI_KOMBINACIJU')
    },
    izvuciBroj({commit},broj){
      commit('IZVUCI_BROJ',broj)
    },
    obrisiSve({commit}){
      commit('ISPRAZNI_KOMBINACIJU')
    },
    unesiUKombinaciju({commit}, ele){
      commit('UNESI_U_KOMBINACIJU',ele);
    },
    izbaciIzKombinacije({commit}, ele){
      commit('IZBACI_IZ_KOMBINACIJE',ele);
    },
    updateChip({commit}){
      commit('UPDATE_CHIP')
    }
  },
  modules: {
  }
})
