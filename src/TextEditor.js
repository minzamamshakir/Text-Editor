import React, { useCallback } from "react";
import Quill from "quill";
import ImageResize from "quill-image-resize-module--fix-imports-error";
import "./TextEditor.css";

Quill.register("modules/imageResize", ImageResize);
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [({ list: "ordered" }, { list: "bullet" })],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];
const TextEditor = () => {
  const ref = useCallback((wrapper) => {
    if (wrapper == null) return;
    const ql = document.createElement("div");
    wrapper.innerHTML = "";
    wrapper.append(ql);

    const quill = new Quill(ql, {
      theme: "snow",
      modules: {
        toolbar: TOOLBAR_OPTIONS,
        imageResize: {
          modules: ["Resize", "DisplaySize", "Toolbar"],
        },
      },
    });
    // quill.register("module/imageResize", ImageResize);
  });
  return (
    <div className="container" ref={ref}>
      TextEditor
    </div>
  );
};

export default TextEditor;
