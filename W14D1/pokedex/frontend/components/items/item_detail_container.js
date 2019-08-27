import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  item: ""
});

export default connect(mapStateToProps)(ItemDetail);