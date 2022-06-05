/**
 * This react hook takes in an array of subpages, and returns a ref object that contains a map of pages to a ref that contians their dom element.
 */
import { useRef } from 'react';

export default function useSubPageRefMapCreator(subPages) {
    const subPageRefs = new Map();
    for (const page of subPages) {
        subPageRefs.set(page, {current: null});
    }
    return useRef(subPageRefs);
}