import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div !== null && div !== undefined) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        /><ChannelMessage 
        author="guipatriota"
        date="21/06/2020"
        content="Quero comer bolo!"
      />
      <ChannelMessage 
        author="guipatriota"
        date="21/06/2020"
        content="Quero comer bolo!"
      />
      <ChannelMessage 
        author="guipatriota"
        date="21/06/2020"
        content="Quero comer bolo!"
      />
      <ChannelMessage 
        author="guipatriota"
        date="21/06/2020"
        content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        /> 
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />
        <ChannelMessage 
          author="guipatriota"
          date="21/06/2020"
          content="Quero comer bolo!"
        />

        <ChannelMessage 
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário!"
        />

        <ChannelMessage 
          author="Diego Fernandes"
          date="21/06/2020"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>, me carrega no LoL e CS de novo, por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;