import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Header from "../Header";

describe('<Header />', () => {
    it('should match with snapshot with default values', () => {
        const componentRenderer = renderer.create(<Header>Hello</Header>);
        const component = componentRenderer.toJSON();
        const instance = componentRenderer.root;
        expect(component).toMatchSnapshot();
        // expect(component).toHaveStyleRule('color', '#000');
        // expect(component).toHaveStyleRule('letter-spacing', 'normal');
        expect(instance.findByType('h1')).not.toBeNull();
    });

    it('should match with snapshot with passed props', () => {
        const props = {
            heading: 'h2',
            color: 'red',
            letterSpacing: '10px'
        };
        const componentRenderer = renderer.create(<Header {...props}>Hello</Header>);
        const component = componentRenderer.toJSON();
        const instance = componentRenderer.root;
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule('color', 'red');
        expect(component).toHaveStyleRule('letter-spacing', '10px');
        expect(instance.findByType(props.heading)).not.toBeNull();
    });
});