import { basicSetup, EditorView } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { EditorState } from '@codemirror/state';
window.CodeMirror = { EditorView, basicSetup, markdown, EditorState };
window.CodeMirror.state = { EditorState };
