/* eslint-disable import/no-extraneous-dependencies, func-names */
/* global describe, it */
import { expect } from 'chai';

import lib from './index';

describe('frint-component-handlers › index', () => {
  it('exports an object', () => {
    expect(lib).to.be.an('object');
  });
});
