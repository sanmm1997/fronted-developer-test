import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from "../../../../components/layout/Footer";
import projectInfo from "../../../__mocks__/projectInfoMock";

describe('Tests <Footer />', () => {

    const { footerInfo } = projectInfo;

    test('Render component', () => {
        const footer = shallow(<Footer footerInfo={footerInfo}/>);
        expect(footer.length).toEqual(1);
    });

    test('Render copy', () => {
        const footer = mount(<Footer footerInfo={footerInfo}/>);
        expect(footer.find('.copy').text()).toEqual(footerInfo.copy);
    });

    test('Check UI not change', () => {
        const footer = create(<Footer footerInfo={footerInfo}/>);
        expect(footer.toJSON()).toMatchSnapshot();
    });

});
