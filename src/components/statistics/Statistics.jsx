export const Statistics = ({good, neutral, bad, total, positivePercentage})=>{
	return (
		<div className="statistics-wrapper">
		<h2 className="secondary-title">Statistics</h2>
			<ul className="statistics-list">
				<li className="statistics-item">Good: <span>{good}</span></li>
				<li className="statistics-item">Neuteral: <span>{neutral}</span></li>
				<li className="statistics-item">Bad: <span>{bad}</span></li>
				<li className="statistics-item">Total: <span>{total}</span></li>
				<li className="statistics-item">Positive percentage: <span>{positivePercentage} %</span></li>
			</ul>
		</div>
	)
}