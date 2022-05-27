const calculations = require('./calculculations');
const generateRandomNumber = require('./generateRandomNumber');

const updateTicket = (ticket) => {   
    ticket.time=new Date();
    let randomNumber = generateRandomNumber(11);
    const plusMinusSymbol = generateRandomNumber(2);
    randomNumber = plusMinusSymbol === 1 ? randomNumber *-1 :randomNumber*1
    
    calculations(ticket,randomNumber);
    
    console.log(ticket)

}

module.exports = updateTicket;
