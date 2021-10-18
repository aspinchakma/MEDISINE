import React from 'react';
import useAuth from '../../utilities/hooks/useAuth/useAuth'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const { blogsForHome } = useAuth();
    console.log(blogsForHome)
    return (

        <div className="container my-5">
            <h2 className="text-center mb-4">Our Blogs</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    blogsForHome.length && blogsForHome?.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;