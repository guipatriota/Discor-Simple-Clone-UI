import React from 'react';

// export default function Layout() { //Forma de exporta como JavaScript, mas estamos usando TS!!!
//   return (
//     <div>Oi mundo!</div>
//   )
// };

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';

const Layout: React.FC = () => { //Desta forma informamos ao TS de forma clara que estamos crriando um componente React!
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
    </Grid>
  )
};

export default Layout;