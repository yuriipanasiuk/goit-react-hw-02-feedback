import PropTypes from 'prop-types';
import { Title, StyledSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
