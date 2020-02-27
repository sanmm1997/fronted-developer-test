import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import projectInfo from "../../../__mocks__/projectInfoMock";
import Header from "../../../../components/layout/Header";

describe('Tests <Header />', () => {

    const { headerInfo } = projectInfo;

    test('Render component', () => {
        const header = shallow(<Header headerInfo={headerInfo}/>);
        expect(header.length).toEqual(1);
    });

    test('Check UI not change', () => {
        const header = create(<Header headerInfo={headerInfo}/>);
        expect(header.toJSON()).toMatchSnapshot();
    });

    test('Check props', () => {
        const wrapper = mount(<Header headerInfo={headerInfo}/>);
        expect(wrapper.props().headerInfo).toEqual(headerInfo)
    });

});
