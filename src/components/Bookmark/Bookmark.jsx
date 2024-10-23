import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-green-300 p-4 m-4 rounded-lg">
            <h3 className="text-3xl">Title:{title}</h3>
           
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.array
}
export default Bookmark;