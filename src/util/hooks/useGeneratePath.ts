import { useEffect, useState } from 'react';

/**
 * React hook that will get the curent pathname of browser URL, in a useEffect hook, so
 * that it only occurs on the browser.
 * Returns {@link generatePath}, a function that takes a path to navigate to, and returns the adjusted
 * path to navigate to based on the currentpath.
 * This is to handle having resource param in base path.
 * e.g: If example.com/base is the base path of the webpage (like in github pages), then
 * the href for another page should be example.com/base/otherPage.
 */
export default function useGeneratePath() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  // Setting the current path of the browser must be in useEffect, as this is browser specific behaviour
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  });

  /**
   * Generates the href path based on the current path.
   * This is to handle having resource param in base path.
   * e.g: If example.com/base is the base path of the webpage (like in github pages), then
   * the href for another page should be example.com/base/otherPage.
   */
  function generatePath(path: string) {
    // no resource param in base path
    if (currentPath === '/') {
      return path;
    }
    const indexOfLastSlash = currentPath.lastIndexOf('/');
    return currentPath.slice(0, indexOfLastSlash) + path;
  }

  return generatePath;
}
