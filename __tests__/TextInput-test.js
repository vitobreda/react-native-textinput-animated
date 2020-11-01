import 'react-native';
import React from 'react';
import {TextinputAnimated} from '../lib';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
 const tree = renderer.create(<TextinputAnimated />);

 expect(tree).toMatchSnapshot();

});
