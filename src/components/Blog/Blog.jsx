import PropTypes from 'prop-types';
import { IoBookmark } from "react-icons/io5";

const Blog = ({ blog,handleAddToBookmarks,handleMarkAsRead }) => {
    const {title, cover,posted_date, author, author_img, reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between mb-4 space-y-4'>
                <div  className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'> 
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2 text-red-500 text-2xl'><IoBookmark></IoBookmark></button>

                </div>
            </div>
            <h2 className='text-4xl'> Title: {title}</h2>
           <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href=""> { hash }  </a></span>)


            }
           </p>
           <button onClick={()=>handleMarkAsRead(reading_time)}
            className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;