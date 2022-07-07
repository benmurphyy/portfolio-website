// allows typescript allow importing files of these types
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.scss';
declare module '*.pdf';
declare module '*.jpg?preload';
declare module '*.jpg?prefetch';
declare module '*.html';

// for responsive loader
interface ResponsiveImageOutput {
  src: string;
  srcSet: string;
  placeholder: string | undefined;
  images: { path: string; width: number; height: number }[];
  width: number;
  height: number;
  toString: () => string;
}

declare module '*!rl' {
  const src: ResponsiveImageOutput;
  export default src;
}
