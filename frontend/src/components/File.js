import PropTypes from "prop-types";
function File({ changeDir, item }) {
  return (
    <div
      className="focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded"
      onClick={() => changeDir(item)}
    >
      <span
        className={` h-10 w-10 block ${
          //blue bg for folders and red bg for files
          item.type === "dir" ? "bg-blue-300" : "bg-red-300"
        } rounded`}
      ></span>
      <span className=" break-all mt-1">{item.file}</span>
    </div>
  );
}

//prop check
File.propTypes = {
  changeDir: PropTypes.func,
  item: PropTypes.object,
};

export default File;
