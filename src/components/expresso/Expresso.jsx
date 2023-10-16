export const Expresso = (handleIncrementOption)=>{
	return(
		<section className="main">
			<h1 className="main-title">Pleace leave feedback</h1>
			<ul className="button-list">
				<li className="button-item">
					<button type ="button" className="button" onClick={()=>handleIncrementOption("good")}>Good</button>
					
				</li>
				<li className="button-item">
					<button type ="button" className="button" onClick={()=>handleIncrementOption("neutral")}>Neutral</button>
					
				</li>
				<li className="button-item">
					<button type ="button" className="button" onClick={()=>handleIncrementOption("bad")}>Bad</button>
					
				</li>
			</ul>
			<h2 className="secondary-title">Statistics</h2>
			<ul className="statistics-list">
				<li className="statistics-item">Good: <span>0</span></li>
				<li className="statistics-item">Neuteral: <span>0</span></li>
				<li className="statistics-item">Bad: <span>0</span></li>
			</ul>
		</section>
	)
}