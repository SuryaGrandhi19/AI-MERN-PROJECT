import API from "./axios";

// Free Preview
export const previewPortfolio = async (portfolioUrl) => {

    const response = await API.post(
        "/portfolio/preview",
        {
            portfolioUrl
        }
    );

    return response.data;
};


// Login Required
export const reviewPortfolio = async (portfolioUrl) => {

    const response = await API.post(
        "/portfolio/review",
        {
            portfolioUrl
        }
    );

    return response.data;
};