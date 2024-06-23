<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Revenue',
            backgroundColor: 'rgb(30 64 175 1)',
            data: [400000, 200000, 120000, 300000, 200000, 120000]
          }
        ]
      }
    }
  }
}
</script>

<template>
  <Bar :data="chartData" />
</template>
