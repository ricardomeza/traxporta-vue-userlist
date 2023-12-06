import { ref } from 'vue'
import { describe, expect, it } from 'vitest'
import { getRandomNumber, searchTextInField } from '../misc'

describe('getRandomNumber', () => {
  it('should return a number', () => {
    const result = getRandomNumber(10)
    expect(typeof result).toBe('number')
  })

  it('should return a number less than the provided length', () => {
    const length = 10
    const result = getRandomNumber(length)
    expect(result).toBeLessThan(length)
  })

  it('should return an integer', () => {
    const result = getRandomNumber(10)
    expect(result % 1).toBe(0)
  })

  // Additional tests can be written here
})

describe('searchTextInField', () => {
  it('should return true when queryText is a substring of field', () => {
    const field = 'Hello World'
    const queryText = ref('world')
    const result = searchTextInField(field, queryText)
    expect(result).toBe(true)
  })

  it('should return false when queryText is not a substring of field', () => {
    const field = 'Hello World'
    const queryText = ref('test')
    const result = searchTextInField(field, queryText)
    expect(result).toBe(false)
  })

  it('should be case insensitive', () => {
    const field = 'Hello World'
    const queryText = ref('hElLo')
    const result = searchTextInField(field, queryText)
    expect(result).toBe(true)
  })

  it('should return false for empty field', () => {
    const field = ''
    const queryText = ref('hello')
    const result = searchTextInField(field, queryText)
    expect(result).toBe(false)
  })

  it('should return true for empty queryText', () => {
    const field = 'Hello World'
    const queryText = ref('')
    const result = searchTextInField(field, queryText)
    expect(result).toBe(true)
  })
})
