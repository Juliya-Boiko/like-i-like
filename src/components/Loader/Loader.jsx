import { Puff } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#55B055"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};