import React from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
  margin-bottom: 16px;
`;

const StyledSectionHeader = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
`;

const LargeSectionHeader = styled(StyledSectionHeader)`
  font-size: 32px;
`;

const SectionHeader = ({ children, large }) => {
  return (
    <SectionHeaderWrapper>
      {large ? (
        <LargeSectionHeader>
          { children } 
        </LargeSectionHeader>
      ) : (
        <StyledSectionHeader>
          { children } 
        </StyledSectionHeader>
      )}
    </SectionHeaderWrapper>
  );
}

export default SectionHeader;
