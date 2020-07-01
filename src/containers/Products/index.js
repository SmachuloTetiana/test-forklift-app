import { connect } from "react-redux";
import Products from "./Products";
import { getProducts } from "store/actions";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
  products: state.products.data,
  filtered: state.filter.filteredProducts,
});

const actions = {
  getProducts,
};

export default connect(mapStateToProps, actions)(Products);
