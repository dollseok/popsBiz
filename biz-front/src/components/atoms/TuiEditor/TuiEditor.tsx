import { Editor } from '@toast-ui/react-editor';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface TuiEditorPropsType {
  data: string;
  setFn: Dispatch<SetStateAction<string>>;
}

const TuiEditor = (props: TuiEditorPropsType) => {
  const editorRef = useRef<Editor>(null);

  const toolbar = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote', 'ul', 'ol'],
    ['image'],
  ];

  const handleChangeInput = () => {
    if (editorRef.current) {
      props.setFn(editorRef.current.getInstance().getHTML());
    }
  };

  return (
    <>
      <Editor
        height="400px"
        placeholder="공지 내용을 입력해주세요."
        initialValue={props.data}
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        hideModeSwitch={true}
        toolbarItems={toolbar}
        autofocus={false}
        onChange={handleChangeInput}
        ref={editorRef}
      />
    </>
  );
};

export default TuiEditor;
