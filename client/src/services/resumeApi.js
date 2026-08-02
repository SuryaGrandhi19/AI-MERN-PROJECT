import API from "./axios";


export const previewResume = async (file) => {

    const formData = new FormData();

    formData.append("resume", file);

    const response = await API.post(
        "/resume/preview",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};

// Upload Resume (Login Required)
export const uploadResume = async (file) => {

    const formData = new FormData();

    formData.append("resume", file);

    const response = await API.post(

        "/resume/upload",

        formData,

        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

    );

    return response.data;
};

// Get Full AI Review
export const reviewResume = async (resumeId) => {

    const response = await API.post(

        `/ai/review/${resumeId}`

    );

    return response.data;
};