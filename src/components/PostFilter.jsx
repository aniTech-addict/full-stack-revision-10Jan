import PropTypes from 'prop-types'

export function PostFilter({ field, value, onAuthorChange }) {
    const handleChange = (e) => {
        e.preventDefault()
        onAuthorChange(e.target.value)
    }
    return (
        <div>
            <label htmlFor={`filter-${field}`}> {field}:</label>
            <input
                type='text'
                name={`field-${field}`}
                id={`field-${field}`}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

PostFilter.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onAuthorChange: PropTypes.func.isRequired,
}
