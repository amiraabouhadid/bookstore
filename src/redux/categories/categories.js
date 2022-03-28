const CHECK = 'app/categories/STATUS_CHECKED';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return action.text;

    default:
      return state;
  }
};
export const checkStatus = () => ({
  type: CHECK,
  text: 'Under construction',
});

export default reducer;
