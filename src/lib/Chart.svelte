<!-- BarChart.svelte -->
<script>
  import { Bar } from "svelte-chartjs";
  import { Pie } from "svelte-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    ArcElement,
    CategoryScale,
  } from "chart.js";

  import "chart.js/auto";
  import { Chart, BarElement, LinearScale } from "chart.js";

  // import { selectedOption } from "../store/selectionStore";

  Chart.register(
    Title,
    Tooltip,

    BarElement,
    CategoryScale,
    LinearScale,
  );

  ChartJS.register(Title, Tooltip, ArcElement, CategoryScale);

  let chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales",
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#AC64AD",
          "#009673",
        ],
        // borderColor: "rgba(75, 192, 192, 1)",
        // borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  let chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        margin: 20,
        labels: {
          fontColor: "#000",
          fontWeight: "bolder",
          padding: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
  };

  // let selected;
  // // Subscribe to changes in the selectedOption store
  // selectedOption.subscribe(value => {
  //   selected = value;
  // });


</script>

<Pie data={chartData} options={chartOptions} />
<!-- <div>
  <p>The selected Category is: {selected}</p>
</div> -->
