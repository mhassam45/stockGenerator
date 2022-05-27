const updateTicket = require('../helpers/updateTickets');

const cronJobFunction = (tickets) => {

    setInterval(() => {
        const ticketToUpdate = tickets[Math.floor(Math.random()*10)];
        updateTicket(ticketToUpdate);
    }, 100);
    
}

module.exports = cronJobFunction;