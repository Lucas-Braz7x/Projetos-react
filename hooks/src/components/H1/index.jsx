import { useContext } from 'react';
import { GlobalContext } from '../../store/GlobalContext';

export const H1 = () => {
  const context = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = context;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
