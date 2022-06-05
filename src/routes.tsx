import React, { RefObject, Suspense } from 'react';
import { Routes, Route } from 'react-router';

import Homepage from 'src/pages/homePage';

//lazily load all other pages of application except homepage
const Knowledge = React.lazy(() => import('src/pages/knowledgePage'));
const Experience = React.lazy(
  () => import('src/pages/experiencePage')
);

import * as pages from 'src/assets/data/pages.json';

interface PageProps {
  navigator: RefObject<HTMLDivElement>;
}

const pageComponents: { [key: string]: React.FunctionComponent<PageProps> } = {
  Homepage: Homepage,
  Knowledge: Knowledge,
  Experience: Experience,
};

interface PageChooserProps {
  page: string;
  navigator: RefObject<HTMLDivElement>;
}

//pass down the navigator ref to all specific pages
function PageChooser({ page, navigator }: PageChooserProps) {
  const SpecificPage = pageComponents[page as keyof typeof pageComponents];
  return <SpecificPage navigator={navigator} />;
}

interface RouterProps {
  navigator: RefObject<HTMLDivElement>;
}

export default function Router({ navigator }: RouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route
          key="home"
          path="/"
          element={<Homepage navigator={navigator} />}
        />
        {pages.map((page) => (
          <Route
            key={page.name}
            path={page.path}
            element={<PageChooser navigator={navigator} page={page.name} />}
          >
            <Route path=":subPage"></Route>
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}
