import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: red;
  }
`;
