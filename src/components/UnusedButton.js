const BotaoEstiloGenero = styled.input`
  position: absolute;
  top: -20px;
  &:hover + span {
    color: #00994d;
  }
  &:checked + span {
    color: #006633;
    font-weight: bold;
  }
  &:checked:hover + span {
    color: #00994d;
  }
`;

const DivBotao = styled.div`
  margin: 5px;
  border-radius: 4px;
  border: 1px solid #d0d0d0;
  overflow: auto;
  padding: 10px;
  float: left;

  &:hover {
    margin: 4px;
    overflow: auto;
    float: left;
    color: #00994d;
    border: 1px solid #00994d;
  }

  &:checked {
    color: #00994d;
    border: 1px solid #00994d;
  }
`;
const Label = styled.label`
  float: left;
  width: 4em;
`;
const Span = styled.span`
  text-align: center;
  padding: 3px 0px;
  display: block;
`;