const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#52c41a' },  //修改主题色
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};