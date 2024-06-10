import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from 'react';

interface modalPropsType {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ModalRefHookReturnType {
  modalRef: RefObject<HTMLDivElement>;
}

const useModalRef = (props: modalPropsType): ModalRefHookReturnType => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      props.setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return { modalRef };
};
export { useModalRef };
