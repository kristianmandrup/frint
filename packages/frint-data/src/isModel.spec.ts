/* eslint-disable import/no-extraneous-dependencies, func-names */
/* global describe, it */
import { expect } from 'chai';

import Types from './Types';
import createModel from './createModel';
import isModel from './isModel';

describe('frint-data › isModel', function () {
  it('returns true when object is a valid Model instance', function () {
    const Person = createModel({
      schema: {
        name: Types.string,
      },
    });

    const model = new Person({ name: 'Frint' });
    expect(isModel(model)).to.equal(true);
  });

  it('returns false when object is NOT a model', function () {
    expect(isModel(123)).to.equal(false);
    expect(isModel('hi')).to.equal(false);
    expect(isModel(() => {})).to.equal(false);
    expect(isModel(null)).to.equal(false);
    expect(isModel(undefined)).to.equal(false);
    expect(isModel(true)).to.equal(false);
    expect(isModel(false)).to.equal(false);
  });
});
