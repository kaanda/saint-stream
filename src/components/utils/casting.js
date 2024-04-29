import { getCast } from "../../service/cast.service";

export const getCasting = async (id, type) => {
    const response = await getCast(id, type);
    return response;
}
