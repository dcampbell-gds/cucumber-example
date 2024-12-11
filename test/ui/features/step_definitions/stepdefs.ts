import { strict as assert } from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import { isItFriday } from '../../../../src/index';

Given('today is Sunday', function () {
  // Write code here that turns the phrase above into concrete actions
  this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
  // Write code here that turns the phrase above into concrete actions
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  // Write code here that turns the phrase above into concrete actions
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Given('today is Friday', function () {
  this.today = 'Friday';
});