import PropTypes from 'prop-types';

export function PostFilter({ field }){
    return (
        <div>
            <label htmlFor={`filer: -${field}`}> {field}:</label>
            <input 
                type='text'
                name={`field-${field}`}
                id={`field-${field}`}
            />
        </div>
    )
}

PostFilter.propTypes = {
    field: PropTypes.string.isRequired
}