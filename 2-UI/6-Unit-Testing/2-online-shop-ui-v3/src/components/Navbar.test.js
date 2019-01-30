import React from 'react';
import renderer from 'react-test-renderer'
import Navbar from './Navbar';

it('Renders movies', () => {
    const component = renderer.create(
        <Navbar title="shop-IT" />
    );
    expect(component).toMatchSnapshot();
});