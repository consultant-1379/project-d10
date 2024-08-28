/**
 * Integration tests for <e-survey-app>
 */
import { expect, fixture } from '@open-wc/testing';
import '../../../src/apps/survey-app/survey-app.js';

describe('SurveyApp Application Tests', () => {
  describe('Basic application setup', () => {
    it('should create a new <e-survey-app>', async () => {
      const element = await fixture('<e-survey-app></e-survey-app>');
      const headingTag = element.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your app markup goes here" was not found',
      ).to.equal('Your app markup goes here');
    });
  });
});
