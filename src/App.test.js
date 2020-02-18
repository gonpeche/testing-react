import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
    @function setup
    @param {object} props - Component props specific to this setup
    @param {object} state - Initial state for setup
*/

const setup = ( props = {}, state = null ) => {
    const wrapper = shallow(<App {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders correctly', () => {

});
test('has a button', () => {

});
test('has a display counter', () => {

});
