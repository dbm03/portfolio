import type { Activity } from "react-activity-calendar"

export type Year = number | 'last'

export interface GitHubCalendarApiResponse {
    total: {
        [year: number]: number;
        [year: string]: number; // 'lastYear;
    };
    contributions: Array<Activity>;
}

export interface GitHubCalendarApiErrorResponse {
    error: string;
}
