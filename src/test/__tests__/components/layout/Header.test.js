import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import projectInfo from "../../../__mocks__/projectInfoMock";
import Header from "../../../../components/layout/Header";
import ProviderMock from "../../../__mocks__/providerMock";

describe('Tests <Header />', () => {

    const { headerInfo } = projectInfo;

    test('Render component', () => {
        const header = shallow(<Header headerInfo={headerInfo}/>);
        expect(header.length).toEqual(1);
    });

    test('Check UI not change', () => {
        const header = create(
            <ProviderMock>
                <Header headerInfo={headerInfo}/>
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    });

});
