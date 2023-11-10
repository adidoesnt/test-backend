const { NODE_ENV } = process.env;

export const getRoute = (path: string) => {
    if(path === "/") {
        return NODE_ENV === "development" ? 'index' : 'index.html';
    }
    return NODE_ENV === "development" ? path : `${path}.html`;
};
