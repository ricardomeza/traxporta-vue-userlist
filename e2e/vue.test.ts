import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro

test.beforeEach(async ({ page }) => {
  const tableSelector = '#tableUserList'
  await page.goto('/')
  await page.waitForSelector(tableSelector)
})

test('Visits the app root url and check data was successfully loaded', async ({ page }) => {
  const tableSelector = '#tableUserList'
  await expect(page.locator('h2')).toHaveText('Users')
  const rows = await page.$$eval(`${tableSelector} tr`, (rows) => rows.length)
  expect(rows).toBeGreaterThan(1) // tr header counts!
})

test('Insert text in input search, must return one value', async ({ page }) => {
  const tableSelector = '#tableUserList'
  const inputSearchSelector = '#search'

  await page.fill(inputSearchSelector, 'Leanne')
  const rows = await page.$$eval(`${tableSelector} tr`, (rows) => rows.length)
  expect(rows).toBe(2)
})

test('clear search input when clicks on clear icon', async ({ page }) => {
  const tableSelector = '#tableUserList'
  const inputSearchSelector = '#search'
  const iconClearSearch = '#iconClearSearch'
  let rows = 0

  await page.fill(inputSearchSelector, 'Leanne')
  rows = await page.$$eval(`${tableSelector} tr`, (rows) => rows.length)
  expect(rows).toBe(2) // tr header + one user returned

  await page.click(iconClearSearch, { delay: 1000 })
  expect(inputSearchSelector).toBe('#search')

  rows = await page.$$eval(`${tableSelector} tr`, (rows) => rows.length)
  expect(rows).toBeGreaterThan(1) // tr header counts!
})
