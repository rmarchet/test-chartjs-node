# Test chartjs-node package

This script is intended to test chartjs-node and create a PNG image starting from a Chart.js configuration

## Getting Started
To get things started just clone this project and run:
```
npm install
```
and then:
```
npm start
```
or
```
node index.js
```

This version uses canvas-prebuilt so it does not have dependency issues and should run fine without package installation before the npm install command.

The following configuration:

```
{
    type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Oceania", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#76F793", "#22C1DC","#00AC66","#FF8400","#895494","#FF066A"],
        data: [2078, 419, 1167, 734, 784, 633]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2040'
      }
    }
}
```

should create a testimage.png file in the project root directory with this content:

![alt text](https://github.com/rmarchet/test-chartjs-node/blob/master/testimage.png)

Just refer to Chart.js documentation to see more examples and config settings:
https://www.chartjs.org
