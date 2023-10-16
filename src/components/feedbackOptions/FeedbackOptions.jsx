export const FeedbackOptions = ({onLeaveFeedback, options}) =>{
	return(
		<ul className="button-list">
		{options.map(option => {
			return(

                <li className="feedback-item" key={option}>
                    <button type="button" className="feedback-button" onClick={()=>onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            )
		})}
		</ul>
	)
}