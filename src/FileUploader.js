import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const FileUploader = ({ files = [] }) => {
    return (
        <div className="file-uploader">
            <DocViewer
                documents={files.map((file) => ({
                    uri: window.URL.createObjectURL(file),
                    fileName: file.name,
                }))}
                pluginRenderers={DocViewerRenderers}
            />

        </div>
    );
};

export default FileUploader;
