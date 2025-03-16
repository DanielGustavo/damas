import React, { forwardRef } from 'react';

import { TModalRef } from '../Modal/compositionComponents/Root';
import Modal from '../Modal/index';

import * as S from './styles';

const MenuModal: React.ForwardRefRenderFunction<TModalRef, unknown> = (
  _,
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
              <S.Item>
                <p>#1 Daniel</p>{' '}
                <p>
                  <span className="green">10</span>/
                  <span className="red">2</span>/<span>1</span>
                </p>
              </S.Item>
              <S.Item>
                <p>#2 Daniel</p>{' '}
                <p>
                  <span className="green">10</span>/
                  <span className="red">2</span>/<span>1</span>
                </p>
              </S.Item>
              <S.Item>
                <p>#3 Daniel</p>{' '}
                <p>
                  <span className="green">10</span>/
                  <span className="red">2</span>/<span>1</span>
                </p>
              </S.Item>
            </div>
          </S.Items>
        </S.ContentContainer>
      </S.ContentContainer>
    </Modal.Root>
  );
};

export default forwardRef(MenuModal);
