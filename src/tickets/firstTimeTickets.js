
const generateFirstTimeTickets = (range) =>{
    const tickets = [];
    for(let i =0 ; i<range;i++){
        const ticket = {
            "time":new Date(),
            "symbol":(Math.random().toString(36).slice(-4)).toUpperCase(),
            "open": 120.00,
            "high": 150.00,
            "low": 110.00,
            "close": 121.00,
            "volume": 1300000
        };
        tickets.push(ticket);
    }
    return tickets;
}

module.exports = generateFirstTimeTickets;