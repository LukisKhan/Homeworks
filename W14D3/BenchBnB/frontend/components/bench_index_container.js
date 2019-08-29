import BenchIndex from "./bench_index.jsx";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  benches: state.entities.benches,
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);