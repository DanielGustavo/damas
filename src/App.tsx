import * as S from './styles/app';
import { theme } from './styles/theme';
import Profile from './components/Profile';
import Board from './components/Board';

function App() {
  return (
    <S.Container>
      <S.Header>
        <Profile name="Jogador 01" color={theme.colors.primary} />
        <Profile name="Jogador 02" color={theme.colors.secondary} reverse />
      </S.Header>

      <S.BoardContainer>
        <Board />
      </S.BoardContainer>
    </S.Container>
  );
}

export default App;
