import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let maxPrice = action.payload.map((product) => product.price)
      maxPrice = Math.max(...maxPrice)
      
      return {...state, 
        all_products: [...action.payload],
        filtered_products: [...action.payload], 
        filters: {...state.filters, max_price: maxPrice, price: maxPrice}, 
      }
    }
    case SET_GRIDVIEW: {
      return {...state, grid_view: true}
    }
    case SET_LISTVIEW: {
      return {...state, grid_view: false}
    }
    case UPDATE_SORT: {
      return {...state, sort: action.payload}
    }
    case SORT_PRODUCTS: {
      const {sort, filtered_products} = state;
      let tempProducts = [...filtered_products];
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((currItem, nextItem) =>
        currItem.price - nextItem.price)
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((currItem, nextItem) =>
        nextItem.price - currItem.price)
      }
      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((currItem, nextItem) => {
          return currItem.name.localeCompare(nextItem.name)
        })
      }
      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((currItem, nextItem) => {
          return nextItem.name.localeCompare(currItem.name)
        })
      }
      return {...state, filtered_products: tempProducts};
    }
    case UPDATE_FILTERS: {
      const {name, value} = action.payload;
      return {...state, filters: {...state.filters, [name]: value}}
    }
    case FILTER_PRODUCTS: {
      const {all_products} = state
      const {text, category, company, color, price, shipping} = state.filters

      let tempProducts = [...all_products]

      // filtering begins
      if(text) {
        tempProducts = tempProducts.filter((product)=> {
          return product.name.toLowerCase().startsWith(text)
        })
      }

      return {...state, filtered_products: tempProducts};
    }
    case CLEAR_FILTERS: {
      return {...state, 
          filters: {
            ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.max_price,
          shipping: false,
        }};
    }
    default: {
      throw new Error(`No Matching "${action.type}" - action type`)
    }
  }

}

export default filter_reducer
