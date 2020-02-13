import Card from "@material-ui/core/Card";
import styled from "styled-components";

export const PCard = styled(Card)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 1200px;
  max-width:100%;
  margin: 0 auto;
  top: 50%;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  right: 0;
  transform: translateY(-50%);
`;
