/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles/app';
import { theme } from './styles/theme';
import Profile from './components/Profile';
import Board, { EGameState, TPlayer } from './components/Board';
import { useRef, useState } from 'react';
import { List, LogIn, RefreshCcw } from 'react-feather';
import { api } from './services/api';
import MenuModal from './components/MenuModal';
import { TModalRef } from './components/Modal/compositionComponents/Root';

function App() {
  const [player1, setPlayer1] = useState<TPlayer>({
    id: 0,
    name: '',
    bot: false,
  });
  const [player2, setPlayer2] = useState<TPlayer>({
    id: 1,
    name: '',
    bot: false,
  });

  const [gameState, setGameState] = useState(EGameState.SETUP);

  const menuModalRef = useRef<TModalRef>(null);

  function onChangeBotCheckbox(checked: boolean) {
    setPlayer2((state) => ({ ...state, bot: checked }));
    const inputPlayer2 = document.querySelector('input[name="player2"]');

    if (!inputPlayer2) return;

    if (!checked) {
      (inputPlayer2 as HTMLInputElement).value = '';
      inputPlayer2.removeAttribute('disabled');
      onChangeInput(player2.id, '', false);

      (inputPlayer2 as HTMLInputElement).focus();
    } else {
      (inputPlayer2 as HTMLInputElement).value = 'Bot';
      onChangeInput(player2.id, 'Bot', true);
      inputPlayer2.setAttribute('disabled', 'true');
    }
  }

  function onChangeInput(playerId: number, text: string, bot?: boolean) {
    if (playerId === player1.id) {
      setPlayer1((state) => ({ ...state, name: text }));
    }

    if (playerId === player2.id) {
      setPlayer2((state) => ({ ...state, name: text, bot: bot ?? state.bot }));
    }
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    await api.put('/reset');
    setGameState(EGameState.PLAYING);
  }

  async function restart() {
    await api.put('/reset');
    location.reload();
  }

  async function openRanking() {
    menuModalRef.current?.open();
  }

  if (gameState === EGameState.SETUP)
    return (
      <S.SetupContainer>
        <form onSubmit={handleSubmit as any}>
          <div className="inputs">
            <input
              name="player1"
              placeholder="Nome do jogador 01"
              onChange={(e) => onChangeInput(player1.id, e.target.value)}
            />

            <input
              name="player2"
              placeholder={`Nome do ${player2.bot ? 'bot' : 'jogador 02'}`}
              onChange={(e) => onChangeInput(player2.id, e.target.value)}
            />

            <label className="checkbox">
              <input
                name="bot"
                type="checkbox"
                onChange={(e) => onChangeBotCheckbox(!!e.target.checked)}
              />

              <p>Partida contra bot</p>
            </label>
          </div>

          <button
            disabled={
              !player1.name.length ||
              !player2.name.length ||
              player1.name === player2.name
            }
          >
            Iniciar <LogIn color={theme.colors.dark} size={'1.3rem'} />
          </button>
        </form>
      </S.SetupContainer>
    );

  return (
    <S.Container>
      <S.Header>
        <Profile name={player1.name} color={theme.colors.primary} />

        <button
          className="neutral"
          style={{ width: 'fit-content' }}
          type="button"
          onClick={openRanking}
        >
          <List color={theme.colors.light} size={'1.3rem'} />
        </button>

        <Profile name={player2.name} color={theme.colors.secondary} reverse />
      </S.Header>

      <S.BoardContainer>
        <Board player1={player1} player2={player2} />
      </S.BoardContainer>

      <button
        className="primary"
        style={{ width: 'fit-content', margin: '0 auto' }}
        type="button"
        onClick={restart}
      >
        Reiniciar
        <RefreshCcw color={theme.colors.light} size={'1.3rem'} />
      </button>

      <MenuModal ref={menuModalRef} />
    </S.Container>
  );
}

export default App;
