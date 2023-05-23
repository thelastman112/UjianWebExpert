Feature('Reviewing Restaurants')

Before(({ I }) => {
	I.amOnPage('/')
	I.wait(3)
	I.click('.iddetail:first-child')
	I.wait(3)
})

Scenario('Reviewing a restaurant', ({ I }) => {
	const name = 'Test E2E'
	const review = 'Test E2E'
	I.waitForElement('#namereview')
	I.waitForElement('#review')
	I.fillField('#namereview', name)
	I.fillField('#review', review)
	I.click('button[type=submit]')
	I.wait(2)
	I.see(name, '#reviewnama:first-child')
	I.see(review, '#reviewisi:first-child')
})
