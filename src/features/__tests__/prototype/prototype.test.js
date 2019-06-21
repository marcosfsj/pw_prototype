import React from 'react';
import { shallow } from 'enzyme';
import Prototype from '../../prototype/prototype';
import ButtonsBar from '../../../components/ButtonsBar';

describe('prototype', function () {

	//let component;

	beforeEach(() => {
		//component = shallow(<Prototype />);
	});

	it('should contain a buttons bar', () => {
		//const component = shallow(<Prototype />);
		//expect(component.find(<ButtonsBar />).length).toEqual(1);
	});

	it('should render without throwing an error', function () {
		//expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
	});

	it('should be selectable by class "foo"', function () {
		//expect(shallow(<Foo />).is('.foo')).toBe(true);
	});

	it('should mount in a full DOM', function () {
		//expect(mount(<Foo />).find('.foo').length).toBe(1);
	});

	it('should render to static HTML', function () {
		//expect(render(<Foo />).text()).toEqual('Bar');
	});

});