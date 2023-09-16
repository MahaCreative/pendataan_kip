import React from "react";

export default function pdf_viewer() {
    return (
        <div>
            <embed
                src={pdfUrl}
                type="application/pdf"
                width="100%"
                height="800px"
            />
        </div>
    );
}
