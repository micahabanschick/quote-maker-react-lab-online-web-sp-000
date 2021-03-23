import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <p>{Render Quote Content}</p> */}
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
          <p>{props.quote.content}</p>
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault()
              props.upvoteQuote(props.quote.id)
            }}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={(event) => {
              event.preventDefault()
              props.downvoteQuote(props.quote.id)
            }}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
      </div>
    </div>
  </div>;

export default QuoteCard;
