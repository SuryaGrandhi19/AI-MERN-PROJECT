import "./ProgressBar.css";

function ProgressBar({progress}){

    return(

        <div className="progress-wrapper">

            <div
                className="progress-fill"
                style={{width:`${progress}%`}}
            ></div>

        </div>

    );

}

export default ProgressBar;