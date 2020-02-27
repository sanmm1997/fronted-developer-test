export const fetchProjectInfo = async (file = "./../initialState.json") => {
    const response = await fetch(file);
    return await response.json();
};

export const fetchEmployees = async () => {
    console.log(process.env.BASE_URL_API_EMPLOYEES);
    const response = await fetch(`${process.env.BASE_URL_API_EMPLOYEES}/employees`);
    return await response.json();
};
