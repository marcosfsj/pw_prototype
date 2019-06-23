import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Comments from '../comments/comments';
import CommentBox from '../comments/comment-box';
import CommentList from '../comments/comment-list';
import StoreProvider from '../../utils/store-provider';

describe('tests comments feature', () => {
  let component;

  beforeAll(() => {
    moxios.install();
    moxios.stubRequest('http://localhost:3001/comments', {
      status: 200,
      response: [
        {
          postId: 1,
          id: 1,
          name: 'bla bla',
          email: 'blabla@gmail.com',
          body: 'comment 1'
        },
        {
          postId: 1,
          id: 2,
          name: 'bla bla',
          email: 'blabla@gmail.com',
          body: 'comment 2'
        }
      ]
    });
  });

  afterAll(() => {
    moxios.uninstall();
  });

  beforeEach(() => {
    component = mount(
      <StoreProvider>
        <Comments />
      </StoreProvider>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  describe('tests comment box', () => {
    it('has a text area been cleared out', () => {
      component
        .find(CommentBox)
        .find('form')
        .simulate('submit');
      component.update();
      expect(component.find('textarea').prop('value')).toEqual('');
    });
  });

  describe('tests comment list', () => {
    it('can list the comments', done => {
      moxios.wait(() => {
        component.update();
        expect(
          component
            .find(Comments)
            .find(CommentList)
            .find('li').length
        ).toEqual(2);
        done();
      });
    });
  });
});
