import React, { Component } from "react";
import { compose } from "recompose";
import withLoading from "./hoc/withLoading";
import withPaginatedList from "./hoc/withPaginatedList";
import "./timelineStyle/stylesTimeline.css";
import List from "./ListData";
import PropTypes from "prop-types";

const getUrl = (page) => "http://localhost:3005/activityInfo?_page=${page}&_limit=10'";

class Timeline extends React.Component {
	constructor() {
		super();

		this.state = {
			hits: [],
			page: null,
			isLoading: false
		};
		this.onSetResult = this.onSetResult.bind(this);
		this.applySetResult = this.applySetResult.bind(this);
		this.applyUpdateResult = this.applyUpdateResult.bind(this);
	}

	componentDidMount() {
		this.fetchStories(0);
		// this.onInitialData
	}
	onInitialData = (e) => {
		e.preventDefault();

		const { value } = this.input;

		if (value === "") {
			return;
		}

		this.fetchStories(0);
	};

	onPaginatedListData = (e) => this.fetchStories(this.state.page + 1);

	fetchStories = (page) => {
		this.setState({ isLoading: true });
		fetch(getUrl(page))
			.then((response) => response.json())
			.then((result) => this.onSetResult(result, page));
	};

	onSetResult = (result, page) => {
		console.log(result);

		page === 0 ? this.applySetResult(result) : this.applyUpdateResult(result);
	};
	applySetResult = (result) =>
		this.setState({
			hits: result,
			page: result.page
		});
	applyUpdateResult = (result) =>
		this.setState((prevState) => ({
			hits: [...prevState.hits, ...result],
			page: result.page,
			isLoading: false
		}));

	render() {
		return (
			<div className="page">
				<ListWithLoadingWithPaginated
					handleEditButton={(id, type) => this.props.handleEditButton(id, type)}
					handleDeleteButton={(id) => this.props.handleDeleteButton(id)}
					list={this.props.data}
					page={this.state.page}
					isLoading={this.props.loading}
					onPaginatedListData={this.onPaginatedListData}
				/>
			</div>
		);
	}
}

Timeline.defaultProps = {
	isLoading: true,
	list: [],
	page: 10
};

Timeline.propTypes = {
	handleEditButton: PropTypes.func,
	handleDeleteButton: PropTypes.func,
	list: PropTypes.array.isRequired,
	page: PropTypes.number,
	isLoading: PropTypes.bool,
	onPaginatedListData: PropTypes.func
};

const ListWithLoadingWithPaginated = compose(
	withLoading
	// withInfiniteScroll
)(List);

export default Timeline;
