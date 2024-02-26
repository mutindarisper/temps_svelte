<!-- BarChart.svelte -->
<script>
   import { Bar } from 'svelte-chartjs';
 
   import 'chart.js/auto';
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  
    let chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Monthly Sales',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      }],
    };
  
    let chartOptions = {
        responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  </script>
  
  <Bar data= {chartData} options={chartOptions} />
  