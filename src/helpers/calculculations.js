
const calculations = (ticket, randomNumber) => {

    let close = (ticket.close * randomNumber)/100;
    ticket.close = ticket.close + close 
    if(ticket.close > ticket.high){
        ticket.high = ticket.close;
    }
    
    if(ticket.low > ticket.close){
        ticket.low = ticket.close
    }
    ticket.volume += Math.floor(Math.random() * 1001)

}

module.exports = calculations;