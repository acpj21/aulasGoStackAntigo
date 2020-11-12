import React from 'react';

import Icon from 'react-native-vetor-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
