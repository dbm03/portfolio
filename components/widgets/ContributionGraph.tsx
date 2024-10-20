"use client";
import type { Day as WeekDay } from "date-fns";
import {
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
  Skeleton,
} from "@nextui-org/react";
import type {
  GitHubCalendarApiErrorResponse,
  GitHubCalendarApiResponse,
  Year,
} from "@/types";
import type { ThemeInput, Activity } from "react-activity-calendar";
import { dateDiffInDays } from "@/utils";
import { GithubIcon } from "../icons";
import ActivityCalendar from "react-activity-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const API_URL = "/github-contributions/";

const DEFAULT_THEME: ThemeInput = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

async function fetchGitHubCalendarData(
  username: string,
  year: Year,
): Promise<GitHubCalendarApiResponse> {
  const response = await fetch(`${API_URL}${username}?y=${year}`);
  const data: GitHubCalendarApiResponse | GitHubCalendarApiErrorResponse =
    await response.json();

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as GitHubCalendarApiErrorResponse).error
      }`,
    );
  }

  return data as GitHubCalendarApiResponse;
}

const getData = async (): Promise<Activity[] | null> => {
  try {
    const currentYear = new Date().getFullYear();
    const data = await fetchGitHubCalendarData("dbm03", currentYear);

    const filteredData = data?.contributions?.filter((item) => {
      console.log(item.date);
      const dateDiff = dateDiffInDays(new Date(item.date), new Date());
      return Math.abs(dateDiff) <= 55;
    });
    console.log(filteredData.length);
    return filteredData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const ContributionGraphWidget = () => {
  const [data, setData] = useState<Activity[] | null>(null);

  console.log("Data:", data);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);
  const userTheme = useTheme().theme === "dark" ? "dark" : "light";
  // const weekStart: WeekDay = ((new Date().getDay() + 1) % 6) as WeekDay // Adjust week start so that contribution graph is square-shaped

  return (
    <Card
      as={"article"}
      shadow="sm"
      fullWidth
      classNames={{
        base: "h-full",
      }}
    >
      <div className="flex flex-col lg:flex-row h-full justify-between gap-2 p-5">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Contribution Graph</h2>
            <a
              href="https://github.com/dbm03"
              target="_blank"
              className="hover:opacity-80 
                    transition-opacity flex justify-center items-center w-12 h-12 rounded-md dark:bg-black text-white
                    bg-default-800
                    "
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
        <div className="flex justify-center items-center">
          <ActivityCalendar
            blockSize={20}
            blockMargin={8}
            data={data ?? []}
            hideColorLegend
            hideMonthLabels
            hideTotalCount
            theme={DEFAULT_THEME}
            weekStart={1}
            colorScheme={userTheme}
          />
        </div>
      </div>
    </Card>
  );
};

export default ContributionGraphWidget;
