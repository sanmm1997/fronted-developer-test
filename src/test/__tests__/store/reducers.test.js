import React from 'react';
import projectReducer from "../../../store/reducers/projectReducer";
import {GET_PROJECT_INFO} from "../../../store/types/projectTypes";
import projectInfo from "../../__mocks__/projectInfoMock";

describe('Tests projectReducer.js', () => {

    const initialState = {
        headerInfo: {
            brand: {},
            menu: { links: [] }
        },
        footerInfo: {
            copy: ''
        }
    };

    test('initialState', () => {
        expect(projectReducer(initialState, '')).toEqual(initialState);
    });

    test(`${GET_PROJECT_INFO}`, () => {
        expect(projectReducer(initialState, {
            type: GET_PROJECT_INFO,
            payload: projectInfo
        })).toEqual(projectInfo);
    });

});
