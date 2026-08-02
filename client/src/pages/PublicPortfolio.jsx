import { useState } from "react";

import PortfolioPreviewInput 
from "../components/PortfolioReview/PortfolioPreviewInput";

import LockedReportCard 
from "../components/Common/LockedReportCard";


import "./portfolio.css";


function PublicPortfolio(){


const [result,setResult]=useState(null);



return(

<div className="portfolio-page">


<div className="portfolio-header">


<h1>
AI Portfolio Reviewer
</h1>


<p>

Check your portfolio quality, SEO and UI score.

Login to unlock complete suggestions.

</p>


</div>



<PortfolioPreviewInput 
setResult={setResult}
/>



{

result &&

<>


<div className="preview-result">


<div className="score-card">

<h2>
Overall Score
</h2>


<div className="score-circle">

{result.overallScore}/100

</div>


</div>



<div className="score-card">

<h2>
UI UX Score
</h2>


<div className="score-circle">

{result.uiUxScore}/100

</div>


</div>



<div className="score-card">


<h2>
Content Score
</h2>


<div className="score-circle">

{result.contentScore}/100

</div>


</div>



<div className="score-card">


<h2>
SEO Score
</h2>


<div className="score-circle">

{result.seoScore}/100

</div>


</div>



</div>


<LockedReportCard />

</>


}



</div>

);


}


export default PublicPortfolio;