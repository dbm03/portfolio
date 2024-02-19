"use client";

import { useEffect, useRef, useState } from "react";
import RainyDay from "@/lib/rainyday";
import type { Day as WeekDay } from "date-fns";
import Image from "next/image";
import { Link, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import GitHubCalendar from "react-github-calendar";
import type { GitHubCalendarApiErrorResponse, GitHubCalendarApiResponse, Year } from "@/types";
import ActivityCalendar from "react-activity-calendar"
import type { ThemeInput, Activity } from "react-activity-calendar";
import { dateDiffInDays } from "@/utils";
import { GithubIcon } from "../icons";
import { useTheme } from "next-themes";

const API_URL = "https://github-contributions-api.jogruber.de/v4/";

const DEFAULT_THEME: ThemeInput = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};


async function fetchGitHubCalendarData(
    username: string,
    year: Year,
): Promise<GitHubCalendarApiResponse> {
    const response = await fetch(`${API_URL}${username}?y=${year}`);
    const data: GitHubCalendarApiResponse | GitHubCalendarApiErrorResponse = await response.json();

    if (!response.ok) {
        throw Error(
            `Fetching GitHub contribution data for "${username}" failed: ${(data as GitHubCalendarApiErrorResponse).error}`,
        );
    }

    return data as GitHubCalendarApiResponse;
}

const ContributionGraphWidget = () => {
    const [data, setData] = useState<Activity[] | null>(null);
    const weekStart: WeekDay = (new Date().getDay() + 2) % 6 as WeekDay; // Adjust week start so that contribution graph is square-shaped

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchGitHubCalendarData("barrosodavid", "last");
                
                const filteredData = data?.contributions?.filter((item) => {
                    const dateDiff = dateDiffInDays(new Date(item.date), new Date())
                    return dateDiff <= 55
                })
                setData(filteredData)
            } catch (error) {
                console.error(error);
                setData(null);
            }
        }
        fetchData()
    }, [data])

    const colorScheme = useTheme().resolvedTheme === "dark" ? "dark" : "light";

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
                    <a href="https://github.com/barrosodavid" target="_blank" className="hover:opacity-80 
                    transition-opacity flex justify-center items-center w-12 h-12 rounded-md dark:bg-black text-white
                    bg-default-800
                    ">
                        <GithubIcon size={32} />
                    </a>
                    </div>
                    <div className="pb-7">
                    <Button 
                    className="m-0"
                    as={Link}
                    href="https://github.com/barrosodavid"
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
                    weekStart={weekStart}
                    colorScheme={colorScheme}
                />
                </div>
            </div>
        </Card>
    );
};

export default ContributionGraphWidget;

