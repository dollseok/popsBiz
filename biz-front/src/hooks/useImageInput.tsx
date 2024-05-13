import { ChangeEvent, useRef, useState } from 'react';

type ImageInputHookReturnType = {
  imageUrl: string;
  inputRef: React.RefObject<HTMLInputElement>;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  clearImage: () => void;
};

const useImageInput = (): ImageInputHookReturnType => {
  const [imageUrl, setImageUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 여기에 팝업스토어 이미지 등록 추가해야함
    // TODO: 이미지 저장 로직 api 완성되면 추가
    const file = e.target.files && e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      console.log(reader);
    }
  };

  const handleButtonClick = () => {
    console.log(imageUrl);
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const clearImage = () => {
    setImageUrl('');
  };

  return {
    imageUrl,
    inputRef,
    handleImageChange,
    handleButtonClick,
    clearImage,
  };
};

export { useImageInput };
