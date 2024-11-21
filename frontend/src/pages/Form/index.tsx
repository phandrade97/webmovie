import FormCard from '../../components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <FormCard movieId={movieId!} /> 
  );
}

export default Form;