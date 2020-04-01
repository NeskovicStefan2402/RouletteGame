<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  data() {
    return {
      planetChartData: {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Bank",
              data:[],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }
    };
  },
  created(){
      
      setTimeout(() => {
  //       this.planetChartData.skracenica=0;
            this.createChart('planet-chart',this.planetChartData);      
            console.log(this.planetChartData.data.datasets[0].data)
      }, 1000);
      
    }, 
  methods: {
    createChart(chartId, chartData) {
      this.dodeliBoju();
      const ctx = document.getElementById(chartId);
      chartData.data.labels=this.$store.state.score.history.map(a => this.$store.state.score.history.indexOf(a));
      chartData.data.datasets[0].data=this.$store.state.score.history.map(a => JSON.parse(a).money)
      var myChart = new Chart(ctx, {
        type: 'line',
        data: chartData.data,
        options: chartData.options
      });
    },
    dodeliBoju() {
      this.planetChartData.data.datasets[0].backgroundColor = [];
      this.planetChartData.data.datasets[0].borderColor = [];

      this.$store.state.score.history.forEach(element => {
        this.planetChartData.data.datasets[0].backgroundColor.push(
          "rgba(5, 5, 83, 0.678)"
        );
        this.planetChartData.data.datasets[0].borderColor.push("rgb(5, 5, 83)");
      });
    }
  }
};
</script>
<style scoped>

</style>