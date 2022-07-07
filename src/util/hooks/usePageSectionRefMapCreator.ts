import { useRef } from 'react';
import { PageSection, PageSectionWithRef } from 'src/constants';

/**
 * React hook that converts an object containing PageSections into PageSectionWithRef, by adding a ref
 * for every single page section.
 */
export default function usePageSectionRefMapCreator(sections: {
  [key: string]: PageSection;
}) {
  const pageSectionsWithRefs: { [key in string]: PageSectionWithRef } = {};
  Object.entries(sections).forEach(([key, pageSection]) => {
    pageSectionsWithRefs[key] = {
      ...pageSection,
      ref: useRef<HTMLDivElement>(null),
    };
  });
  return useRef(pageSectionsWithRefs);
}
