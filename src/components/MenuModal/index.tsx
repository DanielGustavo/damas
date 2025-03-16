import React, { forwardRef } from 'react';

import { TModalRef } from '../Modal/compositionComponents/Root';
import Modal from '../Modal/index';

import * as S from './styles';

export type TRanking = {
  name: string;
  wins: number;
  tie: number;
  losts: number;
};

type TMenuModal = {
  ranking: TRanking[] | undefined;
};

const MenuModal: React.ForwardRefRenderFunction<TModalRef, TMenuModal> = (
  { ranking },
  ref
) => {
  return (
    <Modal.Root ref={ref}>
      <S.ContentContainer>
        <S.Header>
          <h1>Ranking</h1>
        </S.Header>

        <S.ContentContainer>
          <S.Items>
            <p className="desc">
              <span className="green">Vitórias</span>/
              <span className="red">Derrotas</span>/<span>Empate</span>
            </p>

            <div className="list">
              {ranking?.map((r, index) => (
                <S.Item key={r.name + index + r.losts}>
                  <p>
                    #{index} {r.name}
                  </p>{' '}
                  <p>
                    <span className="green">{r.wins}</span>/
                    <span className="red">{r.losts}</span>/<span>{r.tie}</span>
                  </p>
                </S.Item>
              ))}
            </div>
          </S.Items>
        </S.ContentContainer>
      </S.ContentContainer>
    </Modal.Root>
  );
};

export default forwardRef(MenuModal);
