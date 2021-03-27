import styled from "styled-components";
import { pxToRem } from "../../globalStyles/sharedStyles";

export const NavigationListContainer = styled.ul`
  margin: ${pxToRem(20)} auto ${pxToRem(20)};
  width: 90vw;
  list-style: none;
  display: flex;
  padding: 0 0 0 ${pxToRem(10)};
`;

export const NavigationListItem = styled.li`
  margin: 0 ${pxToRem(10)} 0 0;
  &.__current {
    border-bottom:
      solid ${pxToRem(1)} 
      ${(props) => props.theme.colors.green};;
  }
`;