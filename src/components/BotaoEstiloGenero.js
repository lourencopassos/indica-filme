import React, { Component } from "react";
import styled from "styled-components";

const BotaoEstiloGenero = styled.input`
  width: 80px;  height: 20px;
  margin-right: -15px;
`;

const DivBotao = styled.div``;
const Label = styled.label``;

const Span = styled.span`
  font-size: 1.5vw;
`;

class BotãoEstiloGenero extends Component {
  render() {
    return (
      <DivBotao>
        <Label>
          <BotaoEstiloGenero
            type="checkbox"
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <Span>{this.props.genero}</Span>
        </Label>
      </DivBotao>
    );
  }
}

export default BotãoEstiloGenero;
