import css from 'components/Filter/Filter.module.css'
import propTypes from "prop-types";
const Filter=({filter, onChange})=>{
  return  (
<div className={css.filterWrapper}>
			<p>Find contacts by name</p>
			<input type="text" name="filter" value={filter} onChange={onChange} />
		</div>

  )
}
Filter.propTypes = {
	filter: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
};
export default Filter