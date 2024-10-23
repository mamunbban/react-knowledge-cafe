import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks , readingtime }) => { 
    return (
        <div className="md:w-1/3 bg-slate-200 ml-6 mt-8 rounded-lg pt-4">
            <div>
                <h2 className="text-4xl">Reading Time: {readingtime}</h2>
            </div>
            <h2 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
}
export default Bookmarks;