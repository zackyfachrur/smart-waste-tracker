export const formatRelativeTime = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);

    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    const units = [
        { label: "tahun", seconds: 60 * 60 * 24 * 365 },
        { label: "bulan", seconds: 60 * 60 * 24 * 30 },
        { label: "minggu", seconds: 60 * 60 * 24 * 7 },
        { label: "hari", seconds: 60 * 60 * 24 },
        { label: "jam", seconds: 60 * 60 },
        { label: "menit", seconds: 60 },
        { label: "detik", seconds: 1 },
    ];

    for (const unit of units) {
        const value = Math.floor(diffInSeconds / unit.seconds);
        if (value >= 1) {
            return `${value} ${unit.label} yang lalu`;
        }
    }

    return "baru saja";
};