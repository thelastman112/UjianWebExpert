Feature('Favoriting Restaurants')

Before(({ I }) => {
	I.amOnPage('/fav.html')
})

Scenario('Adding a restaurant to favorites', ({ I }) => {
	I.waitForElement('.favRestCard', 10)
	I.waitForElement('.fullpage', 10)
	I.click('.favRestCard:last-child .fullpage')
	I.click('.favButton')
	I.click('.backButton')
	I.wait(2)
	I.seeNumberOfElements('.favCard', 1)
})