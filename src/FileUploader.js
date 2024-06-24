import React, { useState } from 'react';
import './FileUploader.css';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const FileUploader = () => {
    const [selectedDocs, setSelectedDocs] = useState([]);

    return (
        <>
            <input
                type="file"
                accept=".pdf"
                multiple
                onChange={(el) =>
                    el.target.files?.length &&
                    setSelectedDocs(Array.from(el.target.files))
                }
            />
            <DocViewer
                documents={selectedDocs.map((file) => ({
                    uri: window.URL.createObjectURL(file),
                    fileName: file.name,
                }))}
                pluginRenderers={DocViewerRenderers}
            />
        </>
    );
};

export default FileUploader;
