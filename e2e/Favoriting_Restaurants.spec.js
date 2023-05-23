// Feature('Favoriting Restaurants')

// Before(({ I }) => {
// 	I.amOnPage('/fav.html')
// })

// Scenario('Checking Favorite list', ({ I }) => {
// 	I.waitForElement('.favitem', 1)
// 	I.seeNumberOfElements('.favCard', 0)
// })

// Scenario('Checking Restaurant list', ({ I }) => {
// 	I.waitForElement('.restitem', 1)
// 	I.waitForElement('.favRestCard', 1)
// 	I.seeNumberOfElements('.favRestCard', 20)
// })

// Scenario('Adding a restaurant to favorites', ({ I }) => {
// 	I.waitForElement('.favRestCard', 10)
// 	I.waitForElement('.fullpage', 10)
// 	I.click('.favRestCard:last-child .fullpage')
// 	I.click('.favButton')
// 	I.click('.backButton')
// 	I.wait(2)
// 	I.seeNumberOfElements('.favCard', 1)
// })
