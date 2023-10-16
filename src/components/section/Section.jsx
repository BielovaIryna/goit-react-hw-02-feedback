import { FeedbackOptions } from "components/feedbackOptions/FeedbackOptions";
import { Notification } from "components/notification/Notification";
import { Statistics } from "components/statistics/Statistics";
export const Secttion = ({state, onLeaveFeedback,countTotalFeedback,countPositiveFeedbackPercentage})=>{
	return(
		<section className="main">
			<h1 className="main-title">Pleace leave feedback</h1>
			<div className="buttons-wrapper">
				<FeedbackOptions
				onLeaveFeedback={onLeaveFeedback}
				options={Object.keys(state)}
				/>
			</div>
			<div className="sataistics">
				{countTotalFeedback>0?
				<Statistics
				good={state.good}
				neutral={state.neutral}
				bad={state.bad}
				total={countTotalFeedback}
				positivePercentage={countPositiveFeedbackPercentage}/>:<Notification/>}
			</div>
		</section>
	)
}