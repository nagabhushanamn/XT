

import TopicList from './TopicList';
import React from 'react';
import { mount, shallow } from 'enzyme';
var sinon = require('sinon');

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('TopicList renders the card with title All Topics', () => {
    const wrapper = shallow(
        <TopicList />
    );
    const titleDiv = wrapper.find('.card-heading');
    expect(titleDiv.text()).toBe('All Topics');
});


test('onclick should return topic name', () => {

    // const handleSelectTopic = jest.fn();  //jest mock
    const handleSelectTopic = sinon.spy();   // sinon spy

    const wrapper = shallow(
        <TopicList onTopicSelect={handleSelectTopic} />
    );
    const topicEle = wrapper.find('.list-group-item').first();
    topicEle.simulate('click');
    expect(handleSelectTopic.callCount).toBe(1)
});

