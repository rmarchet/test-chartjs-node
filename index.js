const { Chart } = require("chart.js/auto");
const { createCanvas } = require("canvas");
const Jimp = require('jimp');
const configuration = require('./sample_data/doughnut');
const SAVE_FILE_NAME = "testimage";

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const CANVAS_BACKGROUND_COLOR = "#ffffff";

const writeImage = (image) => image.write(`${SAVE_FILE_NAME}.${image.getExtension()}`);

(async () => {
  Chart.register(
    require("chartjs-plugin-datalabels"),
    {
      id: "BackgroundColor",
      beforeDraw: (chart) => {
        const { ctx } = chart;
        ctx.save();
        ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
        ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
        ctx.restore();
      }
    }
  );
  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  const ctx = canvas.getContext("2d");
  const chart = new Chart(ctx, configuration);

  canvas.toBuffer(async (error, buffer) => {
    chart.destroy();
    if (error) {
      console.error(error);
    }
    await Jimp.read(await buffer).then(writeImage).catch(function (err) {
      console.error(err);
    });
  }, "image/png");
})();
