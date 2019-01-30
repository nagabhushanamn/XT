

import React from 'react';
import List from './List';


import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from './ListItem';

Enzyme.configure({ adapter: new Adapter() });



describe('List components - tests', () => {

    test('be true', () => {
        expect(true).toBeTruthy()
    })

    //---------------------------------------------
    // shallow Rendering
    //---------------------------------------------

    /*
    test('render list', () => {
        let items = ["one", "two", "three"];
        const wrapper = shallow(<List items={items} />)
        // console.log(wrapper.debug())
        expect(wrapper.find('ul.list-group').length).toBe(1);
    })
    test('render list items', () => {
        let items = ["one", "two", "three"];
        const wrapper = shallow(<List items={items} />)
        // console.log(wrapper.debug())
        expect(wrapper.find('ListItem').length).toBe(3);
    })
    test('render list item text', () => {
        let items = ["one", "two", "three"];
        const wrapper = shallow(<List items={items} />)
        console.log(wrapper.debug())
        expect(wrapper.contains(<ListItem item="one" />)).toBeTruthy();
    })
    */

    //---------------------------------------------
    // Full DOM Rendering
    //---------------------------------------------

    /*

    test('render list', () => {
        let items = ["one", "two", "three"];
        const wrapper = mount(<List items={items} />)
        // console.log(wrapper.debug())
        expect(wrapper.find('ul.list-group').length).toBe(1);
    })
    test('render list items', () => {
        let items = ["one", "two", "three"];
        const wrapper = mount(<List items={items} />)
        // console.log(wrapper.debug())
        expect(wrapper.find('li.list-group-item').length).toBe(3);
    })
    test('render list item text', () => {
        let items = ["one", "two", "three"];
        const wrapper = mount(<List items={items} />)
        console.log(wrapper.debug())
        expect(wrapper.find('li.list-group-item').get(0).props.children).toEqual('one')
    })

    */

    //---------------------------------------------
    // static Rendering i.e test on HTML elements
    //---------------------------------------------

    // test('render list', () => {
    //     let items = ["one", "two", "three"];
    //     const wrapper = render(<List items={items} />)
    //     console.log(wrapper)
    //     expect(wrapper[0].attribs.class).toEqual('list-group')
    // })



})