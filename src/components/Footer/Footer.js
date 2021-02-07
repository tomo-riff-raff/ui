import { gql, useQuery } from '@apollo/client';

export const GET_LANGUAGES = gql`
{
  getLanguages {
    id
    name
  }
}
`;

const renderLanguageNames = (data) => (
  data.getLanguages.map((language) => <li>{language.name}</li>)
)

const Footer = () => {
  const { loading, error, data } = useQuery(GET_LANGUAGES);

  return (
    <footer>
      <p>Languages supported:</p>
      {data && renderLanguageNames(data)}
    </footer>
  )
}

export default Footer
