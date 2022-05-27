const updateTicket = require('../helpers/updateTickets');

const cronJobFunction = (tickets) => {

    setInterval(() => {
        const ticketToUpdate = tickets[Math.floor(Math.random()*10)];
        updateTicket(ticketToUpdate);
    }, 2000);
    
}

module.exports = cronJobFunction;