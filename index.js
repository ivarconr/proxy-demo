const port = process.env.PROXY_PORT || 3000;

const { createApp } = require('@unleash/proxy');


const app = createApp({});

app.listen(port, () =>
    // eslint-disable-next-line no-console
    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),
);