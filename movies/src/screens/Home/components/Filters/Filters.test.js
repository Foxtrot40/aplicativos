import React from  'react';
import Filters from './index';
import renderer from 'react-test-renderer';

describe('Filters', () => {
  it('should follow snapshot', () => {
    const tree = renderer.create(<Filters />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
