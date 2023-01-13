const path = require('path');

module.exports = {
  typescript: {
    enableTypeChecking: false,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@/components": path.resolve(__dirname, './src/components'),
      "@/containers": path.resolve(__dirname, './src/containers'),
      "@/constants": path.resolve(__dirname, './src/constants'),
      "@/utils": path.resolve(__dirname, './src/utils'),
      "@/api": path.resolve(__dirname, './src/assets/api'),
      "@/icons": path.resolve(__dirname, './src/assets/icons'),
      "@/store": path.resolve(__dirname, './src/assets/store'),
      "@/selectors": path.resolve(__dirname, './src/assets/selectors'),
      "@/sagas": path.resolve(__dirname, './src/store/sagas/*'),
    },
  },
};
