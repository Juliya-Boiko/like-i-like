import LogoIcon from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

export const Logo = ({ width, height }) => {
  return (
    <div>
      <NavLink to="/">
        <img src={LogoIcon} width={width} height={height} alt="Logo" />
      </NavLink>
    </div>
  );
};