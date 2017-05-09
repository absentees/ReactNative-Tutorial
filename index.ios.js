// Import library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
const App = () => (
	<Text>Some Text</Text>
);

// Render to device
AppRegistry.registerComponent('albums', () => App);
