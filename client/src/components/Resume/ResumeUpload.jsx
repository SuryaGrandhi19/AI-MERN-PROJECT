import { useState } from "react";
import { previewResume } from "../../services/resumeApi";

function ResumeUpload({ setResult }) {

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!file) {

            alert("Please select a resume");

            return;
        }

        try {

            setLoading(true);

            const data = await previewResume(file);

            console.log("Frontend Response:", data);

            setResult(data.preview);

        } catch (error) {

            console.log(error);

            alert("Failed to analyse resume");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="upload-card">

            <form onSubmit={handleSubmit}>

                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button disabled={loading}>

                    {loading ? "Analysing..." : "Analyse Resume"}

                </button>

            </form>

        </div>

    );

}

export default ResumeUpload;