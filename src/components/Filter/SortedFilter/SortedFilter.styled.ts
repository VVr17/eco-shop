import styled from "styled-components";

export const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
`;

export const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const Sort = styled.label`
  display: flex;
  align-items: center;

  input {
    font-size: ${({ theme }) => theme.fontSizes.xs};

    ::placeholder {
      color: ${({ theme }) => theme.colors.mainText};
    }
  }
`;

export const SortLabel = styled.span`
  margin-right: ${({ theme }) => theme.space[2]};
`;
