import React from 'react';
import { User } from 'react-feather';

import * as S from './styles';

import { theme } from '../../styles/theme';

type TProfile = {
  name: string;
  color: string;
  reverse?: boolean;
};

const Profile: React.FC<TProfile> = ({ name, color, reverse }) => {
  return (
    <S.Container reverse={!!reverse}>
      <S.ProfileIcon color={color}>
        <User stroke="none" fill={theme.colors.light} size="26px" />
      </S.ProfileIcon>

      <p>{name}</p>
    </S.Container>
  );
};

export default Profile;
