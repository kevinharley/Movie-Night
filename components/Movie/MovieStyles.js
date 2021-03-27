import styled from "styled-components";
import {
  desktopBreakpoint,
  laptopBreakpoint,
  pxToRem,
  tabletBreakpoint,
} from "../../globalStyles/sharedStyles";

export const MovieListContainer = styled.div`
  max-width: 90vw;
  margin: 0 auto;
`;

export const MovieListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${tabletBreakpoint}) {
   grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${laptopBreakpoint}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${desktopBreakpoint}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const MoviePosterContainer = styled.div`
  background-image: url(${(props) => props.bgImageUrl});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin: ${pxToRem(10)};
  display: flex;
  min-height: 340px;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  border-radius: ${pxToRem(5)};
  aspect-ratio: 3/4;
  object-fit: contain;

  &:before {
    content: '';
    display: flex;
    height: 100%;
    min-height: ${pxToRem(340)};
    width: auto;
    border: solid ${pxToRem(10)} transparent;
    pointer-events: none;
    transition: border-color 300ms ease-in-out;
    border-radius: ${pxToRem(5)};
  }

  &.__isLiked:before {
    border-color: ${(props) => props.theme.colors.green};;
  }
`;

export const FavoriteButton = styled.button`
  background: ${(props) => props.theme.colors.green};
  border-radius: ${pxToRem(3)};
  border: solid ${pxToRem(1)} ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: block;
  left: ${pxToRem(15)};
  outline: none;
  position: absolute;
  top: ${pxToRem(15)};
`;