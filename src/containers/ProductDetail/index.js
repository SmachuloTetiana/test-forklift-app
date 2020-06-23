import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import { getProducts } from "store/actions";

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps, { getProducts })(ProductDetail);
