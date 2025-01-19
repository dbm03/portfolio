'use client';
import { Button, Link } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { type ThemeInput } from 'react-activity-calendar';
import GitHubCalendar from 'react-github-calendar';
import { GithubIcon } from '../icons';

const DEFAULT_THEME: ThemeInput = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const ContributionGraphWidget = () => {
  const userTheme = useTheme().theme === 'light' ? 'light' : 'dark';
  return (
    <>
      <h2 className="px-5 pt-5 text-xl">Open Source Contributions</h2>
      <div className="flex h-full flex-col justify-between gap-4 p-5 lg:flex-row">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <a
              href="https://github.com/dbm03"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-md bg-default-800 text-white transition-opacity hover:opacity-80 dark:bg-black"
              aria-label="My GitHub profile"
            >
              <GithubIcon size={32} />
            </a>
          </div>
          <div className="pb-7">
            <Button
              className="m-0"
              as={Link}
              href="https://github.com/dbm03"
              showAnchorIcon
              target="_blank"
              color="default"
              variant="ghost"
            >
              Visit my GitHub
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <GitHubCalendar
            username="dbm03"
            style={{
              overflow: 'hidden',
            }}
            theme={DEFAULT_THEME}
            colorScheme={userTheme}
            blockSize={20}
            blockMargin={8}
            hideMonthLabels
            hideColorLegend
            year={2024}
            hideTotalCount
          />
        </div>
      </div>
    </>
  );
};

export default ContributionGraphWidget;
