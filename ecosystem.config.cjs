// PM2 process file for previewing the labourcodes production frontend build on a VPS.
//
// Usage on the VPS:
//   npm install
//   npm run build
//   pm2 start ecosystem.config.cjs
//
// Note: this only serves the built static frontend (`dist/`) via `vite preview`.
// The Express API (server/index.js) must be run/managed separately — see README.md.
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
