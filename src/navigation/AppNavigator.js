import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import { COLORS, FONTS } from '../utils/theme';

// Screens
import HomeScreen from '../screens/HomeScreen';
import TradeSetupScreen from '../screens/TradeSetupScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ChapterDetailScreen from '../screens/ChapterDetailScreen';
import StrategiesScreen from '../screens/StrategiesScreen';
import StrategyDetailScreen from '../screens/StrategyDetailScreen';
import SmartNotebookScreen from '../screens/SmartNotebookScreen';
import MembershipScreen from '../screens/MembershipScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: COLORS.card },
  headerTintColor: COLORS.textPrimary,
  headerTitleStyle: { fontWeight: '800', fontSize: FONTS.sizes.lg },
  contentStyle: { backgroundColor: COLORS.background },
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'TradingEdu' }} />
      <Stack.Screen name="ChapterDetail" component={ChapterDetailScreen} options={{ title: 'Chapter' }} />
      <Stack.Screen name="StrategyDetail" component={StrategyDetailScreen}
        options={({ route }) => ({ title: route.params?.strategy?.title || 'Strategy' })} />
      <Stack.Screen name="Notebook" component={SmartNotebookScreen} options={{ title: 'Smart Notebook' }} />
      <Stack.Screen name="Membership" component={MembershipScreen} options={{ title: 'Membership' }} />
    </Stack.Navigator>
  );
}

function CoursesStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="CoursesMain" component={CoursesScreen} options={{ title: 'Courses' }} />
      <Stack.Screen name="ChapterDetail" component={ChapterDetailScreen} options={{ title: 'Chapter' }} />
      <Stack.Screen name="Notebook" component={SmartNotebookScreen} options={{ title: 'Smart Notebook' }} />
    </Stack.Navigator>
  );
}

function StrategiesStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="StrategiesMain" component={StrategiesScreen} options={{ title: 'Strategies' }} />
      <Stack.Screen name="StrategyDetail" component={StrategyDetailScreen}
        options={({ route }) => ({ title: route.params?.strategy?.title || 'Strategy' })} />
      <Stack.Screen name="Notebook" component={SmartNotebookScreen} options={{ title: 'Smart Notebook' }} />
    </Stack.Navigator>
  );
}

function TabIcon({ emoji, focused }) {
  return (
    <Text style={{ fontSize: focused ? 24 : 20, opacity: focused ? 1 : 0.55 }}>{emoji}</Text>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.card,
            borderTopColor: COLORS.border,
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 8,
            paddingTop: 4,
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textMuted,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '700',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="TradeSetup"
          component={TradeSetupScreen}
          options={{
            title: 'Analyse',
            headerShown: true,
            headerStyle: { backgroundColor: COLORS.card },
            headerTintColor: COLORS.textPrimary,
            headerTitleStyle: { fontWeight: '800' },
            tabBarIcon: ({ focused }) => <TabIcon emoji="🔍" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Courses"
          component={CoursesStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="📚" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Strategies"
          component={StrategiesStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="⚡" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Notebook"
          component={SmartNotebookScreen}
          options={{
            title: 'Notebook',
            headerShown: true,
            headerStyle: { backgroundColor: COLORS.card },
            headerTintColor: COLORS.textPrimary,
            headerTitleStyle: { fontWeight: '800' },
            tabBarIcon: ({ focused }) => <TabIcon emoji="📓" focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
