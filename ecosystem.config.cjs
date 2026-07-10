// PM2 process file for deploying the labourcodes site on a VPS.
//
// Usage on the VPS:
//   npm install
//   npm run build
//   pm2 start ecosystem.config.cjs
//
// This app is a static React/Vite site with no backend, database, or
// secrets — `vite preview` simply serves the production build in `dist/`.
// The port is fixed to 3014 (see also `preview.port` in vite.config.ts).

module.exports = {
  apps: [
    {
      name: 'labourcodes',
      cwd: __dirname,
      script: './node_modules/vite/bin/vite.js',
      args: 'preview --host 0.0.0.0 --port 3014 --strictPort',
      interpreter: 'node',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3014,
      },
    },
  ],
};
