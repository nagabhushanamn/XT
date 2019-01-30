


import React from 'react';
import List from './List';


import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from './ListItem';

var expect = require('chai').expect
var should = require('chai').should()

Enzyme.configure({ adapter: new Adapter() });



describe('List components - tests', () => {

    test('render lits', () => {
        let items = ["one", "two", "three"];
        const wrapper = shallow(<List items={items} />)
        //expect(wrapper.find('ul.list-group').length).toBe(1); // Jest
        expect(wrapper.find('ul.list-group')).with.lengthOf(1) // chai expect
    })

});