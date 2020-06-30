import { connect } from "react-redux";
import FilterPanel from "./FilterPanel";
import { filterProductsByType } from "store/actions";

const mapStateToProps = (state) => ({
  products: state.products.data,
});

const action = { filterProductsByType };

export default connect(mapStateToProps, action)(FilterPanel);
