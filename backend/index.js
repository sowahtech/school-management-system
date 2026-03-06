// Add this at the very top of your index.js
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import app from './app.js'

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})