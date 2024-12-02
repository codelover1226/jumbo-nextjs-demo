'use client';

import React from 'react';

const editorContent =
  '<h2>Awesome Rich Content</h2>\n' +
  '<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n' +
  '\n' +
  '<ul>\n' +
  '        <li>ullamcorper ligula</li>\n' +
  '        <li>Duis vel neque</li>\n' +
  '</ul>\n' +
  '\n' +
  '<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n';
const CkEditorWrapper = () => {
  const [CKEditor, setCKEditor] = React.useState<React.ReactNode>();

  React.useEffect(() => {
    const loadCKEditor = async () => {
      const { default: ClassicEditor } = await import(
        '@ckeditor/ckeditor5-build-classic'
      );
      const { CKEditor: Editor } = await import('@ckeditor/ckeditor5-react');

      setCKEditor(
        <Editor editor={ClassicEditor as any} data={editorContent} />
      );
    };

    loadCKEditor();
  }, []);

  if (!CKEditor) return null;

  return CKEditor;
};
export { CkEditorWrapper };
