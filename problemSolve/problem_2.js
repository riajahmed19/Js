/*SUPPOSE SOMEONE GOES TO A MARKET AND BUY SOME PRODUCT AND PAY SOME MONEY , 
NOW WRITE A PROGRAME  THAT HOW MUCH SHOPKEEPWE WILL PAY BACK AND HOW MANY
 NOTES WILL BE FOR EACH KIND OF NOTES, 
 AND SHOULD HAVE TO COUNNT BIGGER NOTE FIRST THAN SMALLER.
HE HAS AVAILABLE 500,100,50,20,10, 5, 1 TAKA NOTES*/
var bill = 219,
    pay = 500,
    payback;
payback = pay - bill;
var note = [1000, 500, 100, 50, 20, 10, 5, 1];
console.log('Total bill = ' + bill + ' pay = ' + pay + ' payback= ' + payback)
console.log('payment back Listed bellow')
if (pay - bill != 0) {
    payback = pay - bill;
    if (payback > 0) {

        for (var j = 0; j < note.length; j++) {

            var noteNum = (Math.floor(payback / note[j]))

            if (noteNum > 0) {
                payback = payback - note[j] * noteNum

            }
            if (noteNum > 1) {
                console.log(noteNum + " notes of " + note[j] + 'tk')
            } else if (noteNum === 1) {
                console.log(noteNum + " note of " + note[j] + 'tk')
            } else {

            }
        }

    } else {
        console.log('you have to pay ' + -payback + 'tk more')
    }
} else {
    console.log('Nothing to payback, Thank u')
}
