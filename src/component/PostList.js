import React from 'react';
import { connect } from 'react-redux';
import  fetchPosts  from '../actions';

class PostList extends React.Component {
    componentDodMount(){
        this.props.fetchPosts();

    }
    render () {
    return <div>Post List</div>;
}
}
export default connect( 
    null,
    {fetchPosts} )
    (PostList);