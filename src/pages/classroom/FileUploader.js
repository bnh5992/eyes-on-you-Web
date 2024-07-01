import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import './css/FileUploader.css'; // 스타일 파일을 임포트합니다.

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
