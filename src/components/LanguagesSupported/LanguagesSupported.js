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

const LanguagesSupported = () => {
  const { loading, error, data } = useQuery(GET_LANGUAGES);

  return (
    <div>
      <h1>Languages supported:</h1>
      {data && renderLanguageNames(data)}
      <p class="explanatory-text">We hope to add support for other languages in the future. If you have any requests, please email whittyworksco@gmail.com.</p>
    </div>
  )
}

export default LanguagesSupported;