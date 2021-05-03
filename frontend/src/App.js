import { useState, useEffect } from "react";
import baseURL from "./api/api";
import BreadCrumbs from "./components/BreadCrumbs";
import FileExplorer from "./components/FileExplorer";
function App() {
  const [filePath, setFilePath] = useState("root"); //path variable to make requests
  const [currentDir, setCurrentDir] = useState(null); //contents for current directory
  const [crumbs, setCrumbs] = useState(["root"]);

  //get files whenever filePath changes.
  useEffect(() => {
    getFiles(filePath);
  }, [filePath]);

  const getFiles = async (path) => {
    const response = await fetch(`${baseURL}/path/${path}`);
    const result = await response.json();

    //set contents for requested directory like childrens and their type
    setCurrentDir(result);
  };

  //get contents of requested directory from backend, ignored if type is a file
  const changeDir = (dir) => {
    if (dir.type === "file") return;
    setCrumbs((old) => [...old, dir.file]);
    getFiles(dir.file);
  };

  //updates breadcrumb array.
  const manageCrumbs = (index, item) => {
    const arr = crumbs;
    arr.splice(index + 1);
    setCrumbs(arr);
    getFiles(item);
  };

  return (
    <div className="App grid h-screen px-4 md:mx-0 bg-gray-600 place-items-center">
      <div className="md:w-3/4 w-full rounded bg-gray-100 overflow-x-auto shadow-xl">
        <BreadCrumbs crumbs={crumbs} manageCrumbs={manageCrumbs} />
        <FileExplorer currentDir={currentDir} changeDir={changeDir} />
      </div>
    </div>
  );
}

export default App;
