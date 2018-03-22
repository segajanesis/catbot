var quotes = [
	'Cats are one of, if not the most, popular pet in the world.',		
	'There are over 500 million domestic cats in the world.',			
	'Cats and humans have been associated for nearly 10000 years.',			
	'Cats conserve energy by sleeping for an average of 13 to14 hours a day.',				
	'Cats have flexible bodies and teeth adapted for hunting small animals such as mice and rats.',				
	'A group of cats is called a clowder, a male cat is called a tom, and a female cat is called a molly.',							
	'Domestic cats usually weigh around 4 kilograms (8 lb 13 oz) to 5 kilograms (11 lb 0 oz).',							
	'The heaviest domestic cat on record is 21.297 kilograms (46 lb 15.2 oz).',							
	'Cats can be lethal hunters and very sneaky, when they walk their back paws step almost exactly in the same place as the front paws did beforehand.',							
	'Cats have powerful night vision, allowing them to see at light levels six times lower than what a human needs in order to see.',							
	'Cats also have excellent hearing and a powerful sense of smell.',							
	'Older cats can at times act aggressively towards kittens.',		
	'Domestic cats love to play, this is especially true with kittens who love to chase toys and play fight.',			
	'On average cats live for around 12 to 15 years.',			
	'Cats spend a large amount of time licking their coats to keep them clean.',			
	'Feral cats are often seen as pests and threats to native animals.'			
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}