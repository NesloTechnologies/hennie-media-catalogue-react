import { formatDate } from '@neslotech/ui-utils';

const   handleChange = (event, setter) => {
  const key = event.target.name;
  const value = event.target.value;

  if (key === 'releaseDate') {
    setter((previtem) => ({
      ...previtem,
      releaseDate: formatDate(value, 'fr-CA')
    }));
  }

  setter((prevItem) => ({ ...prevItem, [key]: value }));
};

export default handleChange;
