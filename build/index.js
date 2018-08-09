class PomodoroTimer extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			'This timer runs for 20 minutes, followed by a rest of 5 minutes.',
			React.createElement('br', null),
			'For a total time of 30 minutes.',
			React.createElement('br', null),
			'There are 88 seconds elapsed.'
		);
	}
}

ReactDOM.render(React.createElement(PomodoroTimer, null), document.getElementById('app'));