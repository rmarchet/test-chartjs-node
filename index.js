const { CanvasRenderService } = require('chartjs-node-canvas');
const { fs } = require('fs');
const Jimp = require('jimp');
const configuration = require('./sample_data/bars');
const targetImageName = "testimage";

const width = 400;
const height = 400;

const chartCallback = (ChartJS) => {
    ChartJS.defaults.global.responsive = true;
    ChartJS.defaults.global.maintainAspectRatio = false;
};

(async () => {
  const canvasRenderService = new CanvasRenderService(width, height, chartCallback);
  const imagebuf = await canvasRenderService.renderToBuffer(configuration);
  await Jimp.read(await imagebuf).then(function (image) {
    var file = targetImageName + "." + image.getExtension();
    image.write(file)
  }).catch(function (err) {
    console.error(err);
  });
})();
