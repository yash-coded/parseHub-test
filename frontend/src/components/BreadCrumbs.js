import PropTypes from "prop-types";
function BreadCrumbs({ crumbs, manageCrumbs }) {
  return (
    <div className="flex items-center  border-b mb-3 px-3 py-2 overflow-x-auto">
      {crumbs.map((item, index) => (
        <>
          {/* show seperator if current item is not the first element in crumbs array */}
          {crumbs.length === 1 || index === 0 ? null : <span>></span>}
          <button
            className={`focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1 hover:bg-gray-300 rounded ${
              // highlight the last element in crumbs array
              index === crumbs.length - 1 ? "text-blue-600" : ""
            }`}
            onClick={() => manageCrumbs(index, item)}
          >
            {item}
          </button>
        </>
      ))}
    </div>
  );
}

//prop check
BreadCrumbs.propTypes = {
  crumbs: PropTypes.array.isRequired,
  manageCrumbs: PropTypes.func.isRequired,
};

export default BreadCrumbs;
