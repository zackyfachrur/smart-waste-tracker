import { getUserByIdApi } from "@/services/user.api";
import type { UserType } from "@/types/user"
import { useState } from "react"

export const useUserById = () => {
    const [user, setUser] = useState<UserType[]>([]);


}