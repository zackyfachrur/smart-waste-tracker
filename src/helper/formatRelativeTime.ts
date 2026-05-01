export const formatRelativeTime = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);

    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    const units = [
        { label: "year", seconds: 60 * 60 * 24 * 365 },
        { label: "month", seconds: 60 * 60 * 24 * 30 },
        { label: "week", seconds: 60 * 60 * 24 * 7 },
        { label: "day", seconds: 60 * 60 * 24 },
        { label: "hour", seconds: 60 * 60 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
    ];

    for (const unit of units) {
        const value = Math.floor(diffInSeconds / unit.seconds);
        if (value >= 1) {
            return `${value} ${unit.label}${value > 1 ? "s" : ""} ago`;
        }
    }

    return "just now";
};