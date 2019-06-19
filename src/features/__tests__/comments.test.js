import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../comments/comments';
import CommentBox from '../../components/comment/CommentBox';
import CommentList from '../../components/comment/CommentList';

describe('comments', function () {

	let component;

	beforeEach(() => {
		component = shallow(<Comments />);
	});

	it('shows a comment box', () => {
		expect(component.find(CommentBox).length).toEqual(1);
	});

	it('shows a comment list', () => {
		expect(component.find(CommentList).length).toEqual(1);
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