import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../../comments/comment-box';
import BaseTextArea from '../../../components/base/BaseTextArea';
import SubmitButton from '../../../components/buttons/SubmitButton';
import StoreProvider from '../../../utils/store-provider';

let component;

beforeEach(() => {
	component = mount(
		<StoreProvider>
			<CommentBox />
		</StoreProvider>
	);
});

afterEach(() => {
	component.unmount();
});

it('has a text area and a button', () => {
	expect(component.find(BaseTextArea).length).toEqual(1);
	expect(component.find(SubmitButton).length).toEqual(1);
});

describe('the text area', () => {

	beforeEach(() => {
		component.find('textarea').simulate('change', {
			target: {
				value: 'new comment'
			}
		});
		component.update();
	});

	it('has a text area that users can type in', () => {
		expect(component.find('textarea').prop('value')).toEqual('new comment');
	});

	it('has a text area been cleared out', () => {
		component.find('form').simulate('submit');
		component.update();
		expect(component.find('textarea').prop('value')).toEqual('');
	});
});