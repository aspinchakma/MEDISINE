import React from 'react';
import { Spinner } from 'react-bootstrap';
import Blog from '../Home/Blog/Blog';
import useAuth from '../utilities/hooks/useAuth/useAuth';

const BlogPage = () => {
    const { blogs } = useAuth();
    return (
        <div className="container pt-3 pb-5">
            <h2 className="text-center mb-4">Our Blogs</h2>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                {
                    blogs.length ? blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                        :

                        <div className="loading-spinner py-5 my-5">
                            <Spinner animation="grow" variant="primary" />
                        </div>
                }
            </div>
        </div>
    );
};

export default BlogPage;