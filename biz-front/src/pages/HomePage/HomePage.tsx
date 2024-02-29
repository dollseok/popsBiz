import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import HomeComp from '@/components/organisms/HomePage/HomeComp';

const HomePage = () => {
  return (
    <>
      <Wrapper option="Center" $backgroundColor="transparent">
        <HomeComp />
      </Wrapper>
    </>
  );
};

export default HomePage;
