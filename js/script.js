'use strict';

document.querySelector('#setting').addEventListener('click', function () {
  document.querySelector('.hide').classList.toggle('dropdown');
});

document.querySelector('#notification').addEventListener('click', function () {
  document.querySelector('.hide-2').classList.toggle('dropdown');
});

document.querySelector('#profile-img').addEventListener('click', function () {
  document.querySelector('.hide-3').classList.toggle('dropdown');
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Monday',
      'Tuesday',
      'Wendneday',
      'Thrusday',
      'Friday',
      'Satrday',
      'Sunday',
      'Monday',
    ],
    datasets: [
      {
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        label: 'Revenue (K)',
        data: [7, 10, 28, 14, 35, 40, 24, 16],
        backgroundColor: '#2196f3',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: '#9e9e9e', // this here
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            max: 40,
            stepSize: 5,
            fontColor: '#9e9e9e',
          },
        },
      ],
    },
  },
});
