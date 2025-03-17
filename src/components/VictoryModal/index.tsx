import React, { forwardRef } from 'react';

import { TModalRef } from '../Modal/compositionComponents/Root';

import { TPlayer } from '../Board';

import * as S from './styles';
import { RefreshCcw } from 'react-feather';
import { theme } from '../../styles/theme';
import { api } from '../../services/api';

type TVictoryModal = {
  winner?: TPlayer;
  restartGame: () => void;
};

const VictoryModal: React.ForwardRefRenderFunction<TModalRef, TVictoryModal> = (
  { winner, restartGame },
  ref
) => {
  return (
    <S.Root ref={ref}>
      <S.ContentContainer>
        <h1>
          <span className={winner?.id === 0 ? 'p1' : 'p2'}>{winner?.name}</span>{' '}
          venceu a partida
        </h1>

        <div>
          <button
            className="primary"
            type="button"
            onClick={async () => {
              await api.put('/reset');
              location.reload();
            }}
          >
            Reiniciar
            <RefreshCcw color={theme.colors.light} size={'1.3rem'} />
          </button>

          <button onClick={restartGame}>Jogar novamente</button>
        </div>
      </S.ContentContainer>
    </S.Root>
  );
};

export default forwardRef(VictoryModal);
