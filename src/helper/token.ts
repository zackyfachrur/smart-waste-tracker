export const handleToken = () => {
    const account =
        sessionStorage.getItem("auth") ||
        localStorage.getItem("auth");

    if (!account) {
        return { token: null };
    }

    try {
        const parsed = JSON.parse(account);

        return {
            token: parsed?.token ?? null,
        };
    } catch {
        return { token: null };
    }
};