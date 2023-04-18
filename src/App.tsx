import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import {
  BadgeWrapper,
  ColWrapper,
  ContainerInsertWrapper,
  ContainerWrapper,
  GlobalStyle,
  RowWrapper,
  TableStyled,
  TableWrapper,
  Wrapper,
} from './AppStyled';
import PointInput from './components/PointInput';
import MultiplierInput from './components/MultiplierInput';
import { StartedBtn } from './components/StartedBtn';
import { IconWithTextComponent } from './components/IconWithTextComponent';
import CupIcon from './icons/CupIcon';
import { TableCurrentRound, TableRanking } from './components/tables';
import SpeedIcon from './icons/SpeedIcon';
import ControlledSlider from './components/Slider';
import { ScoreBadge, TimeBadge, UserBadge } from './components/badge';
import { StyledLineChart } from './components/LineChart';
import RankingIcon from './icons/RankingIcon';
import ChatIcon from './icons/ChatIcon';
import { Chat } from './components/Chat';
import { useBootstrap } from './hooks/useBootstrap';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  height: 36px;
  width: 100%;
  border-radius: 4px;
  border: none;
  padding: 0 12px;
  background-color: black;
  color: white;
`;

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? '#444856' : '#7E849A')};
  color: ${(props) => (props.disabled ? '#7E849A' : '#ffffff')};
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
  min-height: 48px;
  &:hover {
    background-color: ${(props) => (props.disabled ? '#444856' : '#5E647B')};
  }
`;

function App() {
  const [pointInput, setPointInput] = useState(0);
  const [multiplierInput, setMultiplierInput] = useState(0);
  const [slider, setSlider] = useState(3);
  const [login, setLogin] = useState(false);
  const [name, setName] = useState('');
  const { stateVariable, score, roundData, ranking, postRequest } =
    useBootstrap(pointInput, multiplierInput, login);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <TableWrapper>
            <TableStyled>
              <RowWrapper>
                {login ? (
                  <ColWrapper
                    style={{
                      width: '550px',
                    }}
                  >
                    <RowWrapper>
                      <PointInput
                        score={score}
                        pointInput={pointInput}
                        setPointInput={setPointInput}
                      />
                      <MultiplierInput
                        multiplierInput={multiplierInput}
                        setMultiplierInput={setMultiplierInput}
                      />
                    </RowWrapper>
                    <RowWrapper>
                      <StartedBtn onClick={postRequest} isActive={false} />
                    </RowWrapper>
                    <RowWrapper>
                      <ContainerWrapper>
                        <IconWithTextComponent text="Current Round">
                          <CupIcon />
                        </IconWithTextComponent>
                        <TableCurrentRound data={roundData || []} />
                      </ContainerWrapper>
                    </RowWrapper>
                    <RowWrapper>
                      <ContainerWrapper>
                        <IconWithTextComponent text="Speed">
                          <SpeedIcon />
                        </IconWithTextComponent>
                        <ContainerInsertWrapper>
                          <ControlledSlider onChange={setSlider} />
                        </ContainerInsertWrapper>
                      </ContainerWrapper>
                    </RowWrapper>
                  </ColWrapper>
                ) : (
                  <ColWrapper
                    style={{
                      width: '550px',
                    }}
                  >
                    <RowWrapper>
                      <ContainerWrapper>
                        <ContainerInsertWrapper
                          style={{
                            gap: '36px',
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <h2>Welcome</h2>

                          <InputContainer>
                            <Input
                              type="text"
                              placeholder="Please insert your name..."
                              value={name}
                              onChange={(event) =>
                                setName(event.target.value.trim())
                              }
                            />
                          </InputContainer>
                          <Button
                            onClick={() => {
                              setLogin(true);
                            }}
                            disabled={!name.trim()}
                          >
                            Accept
                          </Button>
                        </ContainerInsertWrapper>
                      </ContainerWrapper>
                    </RowWrapper>
                  </ColWrapper>
                )}
                <ColWrapper style={{ width: '100%' }}>
                  <RowWrapper>
                    <BadgeWrapper>
                      <ScoreBadge score={score} />
                    </BadgeWrapper>
                    <BadgeWrapper>
                      <UserBadge name={name} />
                    </BadgeWrapper>
                    <BadgeWrapper>
                      <TimeBadge />
                    </BadgeWrapper>
                  </RowWrapper>
                  <ContainerWrapper>
                    <StyledLineChart
                      slider={slider}
                      score={stateVariable?.roundedNumber || 0}
                    />
                  </ContainerWrapper>
                </ColWrapper>
              </RowWrapper>
              <RowWrapper>
                <ContainerWrapper>
                  <IconWithTextComponent text="Ranking">
                    <RankingIcon />
                  </IconWithTextComponent>
                  <TableRanking data={ranking || []} />
                </ContainerWrapper>
                <ContainerWrapper>
                  <IconWithTextComponent text="Chat">
                    <ChatIcon />
                  </IconWithTextComponent>
                  <ContainerInsertWrapper>
                    <Chat login={login} />
                  </ContainerInsertWrapper>
                </ContainerWrapper>
              </RowWrapper>
            </TableStyled>
          </TableWrapper>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
