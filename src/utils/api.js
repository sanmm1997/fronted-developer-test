export const fetchProjectInfo = async (file = "./../initialState.json") => {
    const response = await fetch(file);
    return await response.json();
};

export const fetchEmployees = async () => {
    const response = await fetch(`${process.env.BASE_URL_API_EMPLOYEES}/employees`);
    return await response.json();
};

export const removeEmployee = async () => {
    const response = await fetch(`${process.env.BASE_URL_API_EMPLOYEES}/delete/2`, {
        method: 'DELETE'
    });
    return await response.json();
};
