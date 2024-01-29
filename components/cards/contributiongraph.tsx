"use client";

import { useEffect, useRef, useState } from "react";
import RainyDay from "@/lib/rainyday";
import Image from "next/image";
import { Card } from "@nextui-org/react";
import GitHubCalendar from "react-github-calendar";
import type { GitHubCalendarApiErrorResponse, GitHubCalendarApiResponse, Year } from "@/types";
import ActivityCalendar from "react-activity-calendar"
import type { ThemeInput, Activity } from "react-activity-calendar";
import { dateDiffInDays } from "@/utils";

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchGitHubCalendarData("barrosodavid", "last");
                
                const filteredData = data?.contributions?.filter((item) => {
                    const dateDiff = dateDiffInDays(new Date(item.date), new Date())
                    return dateDiff <= 77
                })
                setData(filteredData)
            } catch (error) {
                console.error(error);
                setData(null);
            }
        }
        fetchData()
    }, [data])

    return (
        <Card
            shadow="sm"
            fullWidth
            classNames={{
                base: "h-full w-[215px]",
            }}
        >
            <ActivityCalendar
                blockSize={15}
                data={data ?? []}
                hideColorLegend
                hideMonthLabels
                hideTotalCount
                theme={DEFAULT_THEME}
                weekStart={1}
            />
        </Card>
    );
};

export default ContributionGraphWidget;

