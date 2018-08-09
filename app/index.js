class PomodoroTimer extends React.Component {
	render() {
		return (
			<div>This timer runs for 20 minutes, followed by a rest of 5 minutes.
			<br />For a total time of 30 minutes.
			<br />There are 88 seconds elapsed.</div>
		)
	}
}

ReactDOM.render (
	<PomodoroTimer />,
	document.getElementById('app')
);