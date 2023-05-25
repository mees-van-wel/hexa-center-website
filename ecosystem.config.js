module.exports = {
  apps: [
    {
      name: "hexa-center-website",
      script: "./server/entry.express.js",
      max_memory_restart: "500M",
    },
  ],
};
