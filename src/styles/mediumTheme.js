const styles = `
.medium-toolbar-arrow-under:after {
  border-color: #1e293b transparent transparent;
  top: 34px;
}
.medium-toolbar-arrow-over:before {
  border-color: transparent transparent #1e293b;
  top: -8px;
}
.medium-editor-toolbar {
  background-color: #1e293b;
  background: -webkit-linear-gradient(top, #1e293b, rgba(36, 36, 36, 0.75));
  background: linear-gradient(to bottom, #1e293b, rgba(36, 36, 36, 0.75));
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 3px #1e293b;
}
.medium-editor-toolbar li button {
  background-color: #1e293b;
  padding: 8px !important;
  background: -webkit-linear-gradient(top, #475569, #1e293b);
  background: linear-gradient(to bottom, #475569, #1e293b);
  border: 0;
  border-right: 1px solid #000;
  border-left: 1px solid #333;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  color: #fff;
  height: 34px;
  min-width: 34px;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.medium-editor-toolbar li button:hover {
  background-color: #000;
  color: rgba(255,255,255,0.5);
}
.medium-editor-toolbar li .medium-editor-button-first {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.medium-editor-toolbar li .medium-editor-button-last {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.medium-editor-toolbar li .medium-editor-button-active {
  background-color: #000;
  background: -webkit-linear-gradient(top, #1e293b, #1e293b);
  background: linear-gradient(to bottom, #1e293b, #1e293b);
  color: #fff;
}
.medium-editor-toolbar-form {
  background: #1e293b;
  border-radius: 5px;
  color: #999;
}
.medium-editor-toolbar-form .medium-editor-toolbar-input {
  background: #1e293b;
  box-sizing: border-box;
  color: #ccc;
  height: 34px;
}
.medium-editor-toolbar-form a {
  color: #fff;
  font-size: 18px !important;
}
.medium-editor-toolbar-anchor-preview {
  background: #1e293b;
  border-radius: 5px;
  color: #fff;
}
.medium-editor-placeholder:after {
  color: #1e293b;
}
`;

export default styles;
