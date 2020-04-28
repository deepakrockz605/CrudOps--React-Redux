const initialstate = {
  employees: [],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_EMPLOYEE":
      return {
        ...state,
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.concat(action.payload),
      };
    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                employeeName: action.payload.employeeName,
                employeeDepartment: action.payload.employeeDepartment,
              }
            : content
        ),
      };
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
