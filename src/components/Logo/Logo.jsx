import LogoIcon from '../../images/logo.svg';

export const Logo = ({ width, height }) => {
  return (
    <div>
      {/* <a href=""> */}
        <img src={LogoIcon} width={width} height={height} alt="Logo" />
      {/* </a> */}
    </div>
  );
};