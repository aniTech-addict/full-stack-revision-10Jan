import PropTypes from 'prop-types'
// import {PostList} from './PostList'

export function PostSorting({
    fields = [],
    field,
    onFieldChange,
    order,
    onOrderChange,
}) {
    return (
        <div>
            <label htmlFor='sortBy' id='sortBy'>
                {' '}
                Sort By:{' '}
            </label>
            <select
                name='sortBy'
                id='sortBy'
                value={field}
                onChange={(e) => onFieldChange(e.target.value)}
            >
                {fields.map((field) => (
                    <option key={field} value={field}>
                        {field}
                    </option>
                ))}
            </select>

            {' / '}

            <label htmlFor='sortOrder'> Sort Order:</label>
            <select
                name='sortOrder'
                id='sortOrder'
                value={order}
                onChange={(e) => onOrderChange(e.target.value)}
            >
                <option value='ascending'>ascending</option>
                <option value='descending'>descending</option>
            </select>
        </div>
    )
}

PostSorting.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,

    field: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,

    onFieldChange: PropTypes.func.isRequired,
    onOrderChange: PropTypes.func.isRequired,
}
