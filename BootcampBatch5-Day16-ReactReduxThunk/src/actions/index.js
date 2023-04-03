import _ from 'lodash';
import jsonplaceholder from '../api/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
}

export const fetchUser = id => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
}