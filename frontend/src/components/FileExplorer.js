import File from "./File";
import PropTypes from "prop-types";
function FileExplorer({ currentDir, changeDir }) {
  return (
    <div className="grid grid-cols-2 sm:flex  px-3 mb-3">
      {/* iterate over all children files and folders */}
      {currentDir &&
        currentDir.map((item) => <File changeDir={changeDir} item={item} />)}
    </div>
  );
}

//prop check
FileExplorer.propTypes = {
  currentDir: PropTypes.array.isRequired,
  changeDir: PropTypes.func.isRequired,
};

export default FileExplorer;
