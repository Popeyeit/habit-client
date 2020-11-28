import React from 'react';
import * as styled from './styled';

const UserAvatar = ({
  avatar = '/img/users/user_avatar.svg',
  name = 'Tommy Belkov',
  subscribe = 'Basic',
}: IUser) => {
  return (
    <styled.UserWrapper>
      <styled.UserAvatar src={avatar} alt="user-avatar" />
      <styled.UserName>{name}</styled.UserName>
      <styled.Subscribe type={subscribe}>{subscribe}</styled.Subscribe>
    </styled.UserWrapper>
  );
};

interface IUser {
  avatar: string;
  name: string;
  subscribe: TSubscribeColor;
}
export type TSubscribeColor =
  | 'Basic'
  | 'Premium'
  | 'Ultra'
  | 'Free'
  | 'Standard';

export default UserAvatar;
