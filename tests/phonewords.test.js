'use strict'
/*global it*/

const { describe } = require('mocha')
const phonewords = require('../phonewords')
const assert = require('chai').assert
const { v234593 } = require('./long-value')

describe('phonewords basic functionality', () => {
  it('Should return correct values for 1 digit numbers', () => {
    const words = phonewords(9)
    const expected = ['w', 'x', 'y', 'z']
    assert.deepEqual(words, expected, 'example entry with one digits')
  })
  it('Should return correct values for 2 digit numbers', () => {
    const words = phonewords(23)
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    assert.deepEqual(words, expected, 'example entry with two digits')
  })
  it('Should return correct values for 6 digit numbers', () => {
    const words = phonewords(234593)
    const expected = v234593
    assert.deepEqual(words, expected, 'example entry with six digits')
  })
})

describe('phonewords behaviour with 0s and 1s', () => {
  it('Should return an emtpy array for 0 value', () => {
    const words = phonewords(0)
    assert.deepEqual(words, [], 'Empty array for 1 value')
  })
  it('Should return an emtpy array for 1 value', () => {
    const words = phonewords(1)
    assert.deepEqual(words, [], 'Empty array for 1 value')
  })
  it('Should be empty with 1 at the beginning', () => {
    const words = phonewords(12)
    const expected = []
    assert.deepEqual(words, expected, 'Empty array for 1 value as first digit')
  })
  it('Should be empty with 1 at the end', () => {
    const words = phonewords(291)
    const expected = []
    assert.deepEqual(words, expected, 'Empty array for 1 value as last digit')
  })
  it('Should be empty with 1 the middle', () => {
    const words = phonewords(219)
    const expected = []
    assert.deepEqual(words, expected, 'Empty array for 1 value inside the number')
  })
  it('Should be ignored the 0 at the beginning', () => {
    const words = phonewords(Number('07'))
    const expected = ['p', 'q', 'r', 's']
    assert.deepEqual(words, expected, '0 value as first digit is ignored')
  })
  it('Should be empty with 0 at the end', () => {
    const words = phonewords(290)
    const expected = []
    assert.deepEqual(words, expected, 'Empty array for 0 value as last digit')
  })
  it('Should be empty with 0 the middle', () => {
    const words = phonewords(209)
    const expected = []
    assert.deepEqual(words, expected, 'Empty array for 0 value inside the number')
  })
})

describe('phonewords boundary cases', () => {
  it('Should return an emtpy array for a non numeric parameter', () => {
    const words = phonewords('asdf')
    assert.deepEqual(words, [], 'Empty array when a string is passed')
  })
  it('Should return an emtpy array for an empty paramter', () => {
    const words = phonewords()
    assert.deepEqual(words, [], 'Empty array when no parameter is passed')
  })
  it('Should return an emtpy array for a null paramter', () => {
    const words = phonewords(null)
    assert.deepEqual(words, [], 'Empty array when null parameter is passed')
  })
  it('Should work when an number is passed as string', () => {
    const words = phonewords('07')
    const expected = ['p', 'q', 'r', 's']
    assert.deepEqual(words, expected, 'It is executed as a number')
  })
  it('Should return an emtpy array when parameter is float number ', () => {
    const words = phonewords(3.4)
    assert.deepEqual(words, [], 'Empty array when float number parameter is passed')
  })
})
