import PropTypes from 'prop-types'
// import {PostList} from './PostList'

export function PostSorting({ fields = [] }){
    return (
        <div>
            <label htmlFor='sortBy' id='sortBy' > Sort By: </label>
            <select name="sortBy" id="sortBy">
                {fields.map((field)=>(
                    <option key={field} value={field}>
                        {field}
                    </option>
                ))}
            </select>
            {' / '}
            <label htmlFor="sortOrder"> Sort Order:</label>
            <select name='sortOrder' id='sortOrder'>
                <option values={`ascending`}>ascending</option>
                <option values={`descending`}>descending</option>
            </select>
        </div>
    )
}

PostSorting.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string).isRequired
}