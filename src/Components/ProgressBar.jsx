import "../CSS/progressBar.css"

function ProgressBar(){

    const progress = 70;
    const progressStyle = {
        backgroundColor: "#306EE5",
        width: `${progress}%`,
        height: "100%"
    }

    return(
        <div className="progress">
            <div className="progress-bar">
                <div style={progressStyle} className="progress-bar-completed"></div>
            </div>
            <p className="percentage">{`${progress}%`}</p>
        </div>
    )
}

export default ProgressBar