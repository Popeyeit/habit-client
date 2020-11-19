import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import data from './data';
import * as styled from './styled';
const Navigation = () => {
  return (
    <styled.Navigation>
      {data.map(el => (
        <NavLink
          to={el.to}
          key={el.to}
          className={`link ${el.icon}`}
          activeClassName="active active-icon"
        />
      ))}
    </styled.Navigation>
  );
};

export default Navigation;
