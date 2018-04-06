# Test chartjs-node package

This script is intended to test chartjs-node and create a PNG image starting from a Chart.js configuration

The following configuration:

```
{
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
}
```

should create a testimage.png file in the project root directory with this content:

![alt text](https://github.com/rmarchet/test-chartjs-node/blob/master/testimage.png)

If running MacOS you probably need to install some packages with Brew:

```
brew install pkg-config cairo libpng jpeg giflib
```
