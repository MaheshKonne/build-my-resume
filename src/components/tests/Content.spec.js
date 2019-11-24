import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ContentComp from "../Content";

describe('<ContentComp />', () => {
    it('should match with snapshot with default values', () => {
        const component = renderer.create(<ContentComp>Hello</ContentComp>).toJSON();
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule('color', '#000');
        expect(component).toHaveStyleRule('letter-spacing', 'normal');
    });

    it('should match with snapshot with passed props', () => {
        const props = {
            color: 'red',
            letterSpacing: '10px'
        };
        const component = renderer.create(<ContentComp {...props}>Hello</ContentComp>).toJSON();
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule('color', 'red');
        expect(component).toHaveStyleRule('letter-spacing', '10px');
    });
});