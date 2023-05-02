import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbHomeHeart } from 'react-icons/tb';

const SHeaderLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
`;

const SSvgLayout = styled.div`
  svg {
    font-size: 1.8rem;
    padding: 0 0.8rem;
  }
`;

const SLogoImg = styled.img`
  width: 3rem;
  padding: 0.3rem;
`;

const Header = () => {
  return (
    <>
      <SHeaderLayout>
        <SLogoImg src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        <SSvgLayout>
          <AiOutlinePlus />
          <TbHomeHeart />
        </SSvgLayout>
      </SHeaderLayout>
    </>
  );
};
export default Header;
