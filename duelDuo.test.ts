
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the draw button displays the div with id of choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click() 
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed
    // expect(choices.isDisplayed).toBe(true)
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('Check that clicking an “Add to Duo” button displays the div with id = player-id', async () => {
    const addDuo = await driver.findElement(By.className('bot-btn'))
    await addDuo.click()
    await driver.sleep(2000)
    const player = await driver.findElement(By.id('player-id'))
    const displayed = await player.isDisplayed
    // expect(choices.isDisplayed).toBe(true)
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})