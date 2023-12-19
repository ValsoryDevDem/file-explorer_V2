import React, { useState, useEffect } from "react";

const ContentArea = () => {
  const [fileList, setFileList] = useState([]);
  const [subfolderList, setSubfolderList] = useState([]);
  const [currentFolderPath, setCurrentFolderPath] = useState("");
  const [isSubfolderOpen, setIsSubfolderOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.dropboxapi.com/2/files/list_folder",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer sl.BsC71PE7cnRBAVa_kjfP0a0jF56VZgbrfptGOI0xhOgIfECsyHU8B1vfo990mq4pTq1PB0F7tMUCFODPo0kMjEtD9LKxo9yd11P3g7BDGO7NXu1sZ87uT2l-g1ykZfnguyQRK9krGa0c",
            },
            body: JSON.stringify({
              path: currentFolderPath,
              recursive: false,
              include_media_info: true,
              include_deleted: false,
              include_has_explicit_shared_members: false,
              include_mounted_folders: true,
              include_non_downloadable_files: true,
            }),
          }
        );

        const data = await response.json();
        setFileList(data.entries);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [currentFolderPath]);

  const handleFolderClick = () => {};

  const closeSubfolder = () => {
    setIsSubfolderOpen(false);
    setCurrentFolderPath("");
  };

  if (!fileList) {
    return <p>{"Loading..."}</p>;
  }

  return (
    <div>
      <section className="folder-container">
        <ul>
          {fileList.map((file, index) =>
            file.name.split(".").length === 1 ? (
              <li key={index} onClick={() => handleFolderClick()}>
                📁{file.name}
              </li>
            ) : (
              <li key={index}>📄{file.name}</li>
            )
          )}
        </ul>
        {isSubfolderOpen && (
          <div className="subfolder-container">
            <button onClick={closeSubfolder}>Close Folder</button>
            <ul>
              {subfolderList.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default ContentArea;
