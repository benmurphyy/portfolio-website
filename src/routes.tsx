import React, { RefObject, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Homepage from 'src/pages/homePage';

// Implement code splitting of other pages other than homepage,
// with prefetching so that navigating to these pages will be fast
const Knowledge = React.lazy(
  () => import(/*  webpackPrefetch: true */ 'src/pages/knowledgePage')
);

const Experience = React.lazy(
  () => import(/* webpackPrefetch: true */ 'src/pages/experiencePage')
);

import { pages } from 'src/constants';

interface PageProps {
  mainNavbarRef: RefObject<HTMLDivElement>;
}

const pageComponents: { [key: string]: React.FunctionComponent<PageProps> } = {
  homepage: Homepage,
  knowledge: Knowledge,
  experience: Experience,
};

interface PageChooserProps {
  page: string;
  mainNavbarRef: RefObject<HTMLDivElement>;
}

//pass down the navigator ref to all specific pages
function PageChooser({ page, mainNavbarRef }: PageChooserProps) {
  const SpecificPage = pageComponents[page];
  return <SpecificPage mainNavbarRef={mainNavbarRef} />;
}

interface RouterProps {
  mainNavbarRef: RefObject<HTMLDivElement>;
}

export default function Router({ mainNavbarRef }: RouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route
          key="home"
          path="/"
          element={<Homepage mainNavbarRef={mainNavbarRef} />}
        />
        {pages.map((page) => (
          <Route
            key={page.name}
            path={page.path}
            element={
              <PageChooser mainNavbarRef={mainNavbarRef} page={page.name} />
            }
          >
            <Route
              path=":subPage"
              element={
                <PageChooser mainNavbarRef={mainNavbarRef} page={page.name} />
              }
            ></Route>
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}
