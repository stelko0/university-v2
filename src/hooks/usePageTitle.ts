import { useTitle } from 'react-use';
import { TITLE_SUFFIX } from '../config/config.ts';
export const usePageTitle = (title: string) => {
  useTitle(`${title} - ${TITLE_SUFFIX}`);
};
