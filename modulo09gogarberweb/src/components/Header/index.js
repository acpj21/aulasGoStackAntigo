import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard"> DASHBOARD </Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong> Diego Fernandes </strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
              <img src="https://avatars.dicebear.com/api/human/lala.svg?mood[]=happy&mood[]=surprised" alt="Diego Fernandes"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
