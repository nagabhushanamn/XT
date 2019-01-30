
import React from 'react';
import List from './List';

import renderer from 'react-test-renderer'


describe('List components - tests', () => {

    test('render list', () => {
        let items = ["one", "two", "three"];
        const component = renderer.create(<List items={items} />)
        expect(component).toMatchSnapshot();
    });

});

// to update specic snapshot

// jest u -t="TestName"