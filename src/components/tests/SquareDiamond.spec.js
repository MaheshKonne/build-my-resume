import React from "react";
import renderer from "react-test-renderer";
import SquareDiamond from '../SquareDiamond';

describe('<SquareDiamond />', () => {
    it('should match with snapshot', () => {
        const component = renderer.create(<SquareDiamond />).toJSON();
        expect(component).toMatchSnapshot();
    });
});