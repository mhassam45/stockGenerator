const net = require('net');
require('dotenv').config();
const generateFirstTimeTickets = require('./tickets/firstTimeTickets');
const displayTickets = require('./tickets/displayTickets');
const cronJobFunction = require('./cronJob//cronJob');

const port = process.env.PORT;
const host = process.env.HOST;




console.log('generating ticket for first time');
const tickets = generateFirstTimeTickets(10)



displayTickets(tickets);
cronJobFunction(tickets)



const server = net.createServer();

server.listen(port,host,()=>{
    console.log(`server is running on port ${port}.`)
})
