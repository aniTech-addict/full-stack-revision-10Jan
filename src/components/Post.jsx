import PropTypes from 'prop-types'

export function Post({ title, contents, author }) {
    return (
        <article>
            <h3>{title}</h3>
            <div>{contents}</div>
            {author && (
                <em>
                    <br />
                    Written By <strong> {author} </strong>
                </em>
            )}
        </article>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    contents: PropTypes.string,
}
