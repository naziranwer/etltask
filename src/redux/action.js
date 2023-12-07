export const updateFormData = (formData) => ({
    type: 'UPDATE_FORM_DATA',
    payload: formData,
  });
  
  export const updateFormCompletion = (formName, isCompleted) => ({
    type: 'UPDATE_FORM_COMPLETION',
    payload: { formName, isCompleted },
  });