import { Formik } from 'formik';
import { StyledForm, StyledInput, StyledButton, Icon } from './SearchForm.style';


export const SearchForm = ({onSubmit, value}) => {
return (
    <Formik
        initialValues={{ query: value ?? '' }}
        onSubmit={value => {
          onSubmit(value);
        }}
      >
      <StyledForm>
        <StyledInput
          type="text"
          name="query"
          autoFocus={true}
        />
        <StyledButton type="submit">
          <Icon />
        </StyledButton>
      </StyledForm>
    </Formik>
  );
};