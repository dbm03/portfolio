"use client"
import ActivityCalendar from "react-activity-calendar"
import type { ThemeInput, Activity } from "react-activity-calendar"
import type { Day as WeekDay } from "date-fns"
import { useTheme } from "next-themes"

interface ClientContributionGraphProps {
    data: Activity[] | null
    theme: ThemeInput
    weekStart: WeekDay
}

const ClientContributionGraph = ({
    data,
    theme,
    weekStart,
}: ClientContributionGraphProps) => {
    const userTheme = useTheme().theme === "dark" ? "dark" : "light"
    console.log(userTheme)

    return (
        <ActivityCalendar
            blockSize={20}
            blockMargin={8}
            data={data ?? []}
            hideColorLegend
            hideMonthLabels
            hideTotalCount
            theme={theme}
            weekStart={weekStart}
            colorScheme={userTheme}
        />
    )
}
export default ClientContributionGraph
