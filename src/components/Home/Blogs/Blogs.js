import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../utilities/hooks/useAuth/useAuth'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const { blogsForHome } = useAuth();
    return (

        <div className="container my-5">
            <h2 className="text-center mb-4">Our Blogs</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    blogsForHome[0] !== undefined ? blogsForHome.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                        :

                        <Spinner animation="grow" variant="primary" />
                }
            </div>

        </div>
    );
};

export default Blogs;