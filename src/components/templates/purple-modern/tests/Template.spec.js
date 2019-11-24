import React from "react";
import renderer from 'react-test-renderer';
import Template from "../Template";



describe('<Template />', () => {
    it('should match with snapshot', () => {
        const component = renderer.create(<Template />).toJSON();
        expect(component).toMatchSnapshot();
    });
});