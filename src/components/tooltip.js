import styled from "styled-components";
import Popup from "reactjs-popup";

const TooltipText = styled.p`
  font-family: "Ubuntu";
  background-color: white;
  padding: 10px;
`;

const TooltipButton = styled.button`
  background: black;
  color: white;
  width: 20px;
  border-radius: 10px;
`;

export const TokenTooltip = () => (
  <Popup
    trigger={open => (
      <TooltipButton> ? </TooltipButton>
    )}
    position="right top"
    on={['hover', 'focus']}
  >
    <TooltipText>
      Generate your github token here: https://github.com/settings/tokens/new
    </TooltipText>
  </Popup>
);

export const PromptTooltip = () => (
  <Popup
    trigger={open => (
      <TooltipButton> ? </TooltipButton>
    )}
    position="right top"
    on={['hover', 'focus']}
  >
    <TooltipText>
      This is how the voice app will identify you.
    </TooltipText>
  </Popup>
);