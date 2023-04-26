import styled from 'styled-components';

const SLayout = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SLoadingLogo = styled.img`
  width: 30%;
  margin-bottom: 2.5rem;
`;

const Loading = () => {
  return (
    <>
      <SLayout>
        <SLoadingLogo src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
      </SLayout>
    </>
  );
};

export default Loading;
