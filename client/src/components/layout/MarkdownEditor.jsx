import React from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

function MarkdownEditor({ value, onChange }) {
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "link",
  ]

  return (
    <ReactQuill
      style={{ height: "200px", marginBottom: "60px" }}
      placeholder="Content"
      formats={formats}
      theme="snow"
      value={value}
      onChange={onChange}
    />
  )
}

export default MarkdownEditor
