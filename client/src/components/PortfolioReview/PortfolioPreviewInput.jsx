import { useState } from "react";

import { previewPortfolio } from "../../services/portfolioApi";

import { toast } from "react-hot-toast";

function PortfolioPreviewInput({ setResult }) {

    const [portfolioUrl,setPortfolioUrl]=useState("");

    const [loading,setLoading]=useState(false);

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            setLoading(true);

            const data=await previewPortfolio(portfolioUrl);

            setResult(data.preview);

        }

        catch(error){

            toast.error("Preview failed");

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <div className="upload-card">

            <form onSubmit={handleSubmit}>

                <input

                    type="url"

                    placeholder="https://yourportfolio.com"

                    value={portfolioUrl}

                    onChange={(e)=>setPortfolioUrl(e.target.value)}

                />

                <button>

                    {

                        loading?

                        "Analysing..."

                        :

                        "Analyse Portfolio"

                    }

                </button>

            </form>

        </div>

    );

}

export default PortfolioPreviewInput;