import React, { RefObject, Suspense } from 'react';
import { Routes, Route } from 'react-router';

import Homepage from 'src/pages/homePage';

//lazily load all other pages of application except homepage
const Knowledge = React.lazy(() => import('src/pages/knowledgePage'));
const Experience = React.lazy(() => import('src/pages/experiencePage'));

import pages from 'src/assets/data/pages.json';

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
  const SpecificPage = pageComponents[page as keyof typeof pageComponents];
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
            <Route path=":subPage"></Route>
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}
