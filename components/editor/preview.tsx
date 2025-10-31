import DOMPurify from "dompurify";
import markdownIt from "markdown-it";

const md = new markdownIt();

const Preview = ({ content }: { content: string }) => {
	// Parse Markdown to HTML
	const rawHTML = md.render(content);

	// Sanitize HTML output
	const sanitizedHTML = DOMPurify.sanitize(rawHTML);

	return (
		<section
			className='prose prose-slate max-w-none dark:prose-invert break-words'
			dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
		/>
	);
};

export default Preview;
