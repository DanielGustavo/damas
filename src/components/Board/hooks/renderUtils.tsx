import * as S from '../styles';

const renderUtils = () => {
  function renderCells() {
    const cells = [];

    let border = '0px';

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (row === 0 && col === 0) {
          border = '8px 0px 0px 0px';
        }

        if (row === 0 && col === 7) {
          border = '0px 8px 0px 0px';
        }

        if (row === 7 && col === 0) {
          border = '0px 0px 0px 8px';
        }

        if (row === 7 && col === 7) {
          border = '0px 0px 8px 0px';
        }

        cells.push(
          <S.CellContainer dark={col % 2 != row % 2} borderRadius={border} />
        );

        border = '0px';
      }
    }

    return cells;
  }

  return {
    Cells: () => <>{renderCells()}</>,
  };
};

export default renderUtils;
