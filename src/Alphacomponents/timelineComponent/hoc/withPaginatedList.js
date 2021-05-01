import React,{Component} from 'react'

const withPaginatedList = (Component) => (props) =>
    <div>
        <Component {...props} />

        <div className="interactions">
            {
                (props.page !== null && !props.isLoading) &&
                <button
                    type="button"
                    onClick={props.onPaginatedListData}
                >
                    More
        </button>
            }
        </div>
    </div>

export default withPaginatedList