import { useRef } from 'react';

/**
 * React hook takes in an array of subpage  ames, and returns a ref object that
 * contains a map of page names to a ref that contians their dom element.
 */
export default function useSubPageRefMapCreator(subPages: string[]) {
  const subPageRefs = new Map();
  for (const page of subPages) {
    subPageRefs.set(page, { current: null });
  }
  return useRef(subPageRefs);
}
