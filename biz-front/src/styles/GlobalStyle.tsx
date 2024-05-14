import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, canvas, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		::-webkit-scrollbar {
			background: rgba(0, 205, 206, 0.1);
			width: 10px;
			height: 10px;
		}
		::-webkit-scrollbar-thumb {
			background: #00cdce;
			border-radius: 5px;
		}
	}

	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}

	ul, ol, li {
		list-style: none;
	}

	body {
		width: 100%;
		height: 100%;
		font-weight: 700;
		touch-action: none;
	}
	
	* {
		box-sizing: border-box;
	}
	
	button, input {
  		border: 0;
	}
`;

export default GlobalStyle;
