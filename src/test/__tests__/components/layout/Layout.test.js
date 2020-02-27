import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Layout from "../../../../components/layout/Layout";
import ProviderMock from "../../../__mocks__/providerMock";

describe('Tests <Layout />', () => {

    test('Render component', () => {
        const layout = shallow(
            <ProviderMock>
                <Layout/>
            </ProviderMock>
        );
        expect(layout.length).toEqual(1);
    });

});
