export const fetchProjectInfo = async () => {
    const response = await fetch("./../initialState.json");
    return await response.json();
};

export const fetchStaff = async () => {
    const response = await fetch("./../initialState.json");
    return await response.json();
};
