import fs from 'fs';
import mapReduceProcess from '../services/mapReduceProcess.js';
const logger = async (req, res, next) => {
    console.log("Requested: ",req.method, req.url);
    await fs.appendFileSync('./hits.txt', `${new Date().toISOString()} - ${req.method} - ${req.url} \n`, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
        console.log(`Request logged to hits.txt ${req.method} ${req.url}`);
    });
    await mapReduceProcess();
    next();
}

export default logger;