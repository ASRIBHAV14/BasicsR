
/* axios methods:
axios.get(url)
axios.post(url, data)
axios.delete(url)
axios.put(url, data)
axios.patch(url, data) 

life cycle methods:
  componentDidMount() //When page is loading,logic is written in this.Cdm will be return response and after that state will be updated
  componentDidUpdate() // changes in state object  
  componentWillUnmount()//
*/


import axios from 'axios';
import React from 'react';
import PostsTable from './postsTable';

class Posts extends React.Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);

                this.setState({ posts: res.data });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return <div>
            <PostsTable posts={this.state.posts} />
        </div>;
    }
}

export default Posts;