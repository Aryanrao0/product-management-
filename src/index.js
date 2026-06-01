import 'dotenv/config'
import app from './app.js';
import connectDB from './db/index.db.js';

const PORT = process.env.PORT || 3000;

// connecting mongoDB
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`This server is running at Port ${PORT}`) // if mongoDb connected then only our server listen otherwise not
        });
    })
    .catch((err) => {
        console.error("MongooDB Connection error ", err)
    })

