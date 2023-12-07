const initialState = {
    formData: {
      basicDetails: {},
      documentCollection: {},
      statementOfPurpose: {},
      interviewAvailability: {},
    },
    formCompletion: {
      basicDetails: false,
      documentCollection: false,
      statementOfPurpose: false,
      interviewAvailability: false,
    },
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            ...action.payload,
          },
        };
      case 'UPDATE_FORM_COMPLETION':
        return {
          ...state,
          formCompletion: {
            ...state.formCompletion,
            [action.payload.formName]: action.payload.isCompleted,
          },
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  