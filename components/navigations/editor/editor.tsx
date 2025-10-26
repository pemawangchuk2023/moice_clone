"use client";

import { MDXEditor, MDXEditorMethods, headingsPlugin } from "@mdxeditor/editor";

interface EditorProps {
	markdown: string;
	editorRef?: React.RefObject<MDXEditorMethods | null>;
}

const Editor = ({ markdown, editorRef }: EditorProps) => {
	return (
		<MDXEditor
			onChange={(e) => console.log(e)}
			ref={editorRef}
			markdown={markdown}
			plugins={[headingsPlugin()]}
		/>
	);
};

export default Editor;
