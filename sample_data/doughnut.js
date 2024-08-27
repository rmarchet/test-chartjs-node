var configuration = {
  type: 'doughnut',
  data: {
    labels: ["Africa", "Asia", "Oceania", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#76F793", "#22C1DC","#00AC66","#FF8400","#895494","#FF066A"],
      data: [3001, 207, 1091, 794, 784, 577]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2040'
    }
  }
};

module.exports = configuration;
