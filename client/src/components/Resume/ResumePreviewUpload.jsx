import { useState } from "react";

import { previewResume } from "../../services/resumeApi";

function ResumePreviewUpload({ setResult }) {

    const [file,setFile]=useState(null);

    const [loading,setLoading]=useState(false);

    const handleSubmit=async(e)=>{

        e.preventDefault();

        if(!file){

            return alert("Select Resume");

        }

        try{

            setLoading(true);

            const data=await previewResume(file);

            setResult(data.preview);

        }

        catch(err){

            alert("Preview failed");

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <div className="upload-card">

            <form onSubmit={handleSubmit}>

                <input

                    type="file"

                    accept=".pdf,.doc,.docx"

                    onChange={(e)=>setFile(e.target.files[0])}

                />

                <button>

                    {

                        loading?

                        "Analysing..."

                        :

                        "Analyse Resume"

                    }

                </button>

            </form>

        </div>

    );

}

export default ResumePreviewUpload;