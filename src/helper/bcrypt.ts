import bcrypt from "bcryptjs";

const saltRounds = 10;

export const hashValue = async (value: string): Promise<string> => {
    return await bcrypt.hash(value, saltRounds);
};

export const compareValue = async (
    value: string,
    hashed: string
): Promise<boolean> => {
    return await bcrypt.compare(value, hashed);
};