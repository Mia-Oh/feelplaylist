import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import Loading from './pages/Loading';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Loading />
    </>
  );
};

export default App;
