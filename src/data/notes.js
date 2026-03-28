// Smart Notebook note card colors and categories
export const NOTE_COLORS = {
  blue: {
    key: 'blue',
    label: 'Concept Summary',
    bg: '#E3F2FD',
    border: '#2196F3',
    text: '#1565C0',
    emoji: '🟦',
    description: 'Key concepts and definitions',
  },
  green: {
    key: 'green',
    label: 'Entry Conditions',
    bg: '#E8F5E9',
    border: '#4CAF50',
    text: '#2E7D32',
    emoji: '🟩',
    description: 'Trade entry checklist & rules',
  },
  red: {
    key: 'red',
    label: 'Risk / SL Mistakes',
    bg: '#FFEBEE',
    border: '#F44336',
    text: '#C62828',
    emoji: '🟥',
    description: 'Risks, mistakes & what to avoid',
  },
  yellow: {
    key: 'yellow',
    label: 'Pro Tips',
    bg: '#FFFDE7',
    border: '#FFC107',
    text: '#F57F17',
    emoji: '🟨',
    description: 'Expert insights & advanced tips',
  },
  purple: {
    key: 'purple',
    label: 'Psychology Note',
    bg: '#F3E5F5',
    border: '#9C27B0',
    text: '#6A1B9A',
    emoji: '🟪',
    description: 'Mental game & discipline notes',
  },
  white: {
    key: 'white',
    label: 'Personal Notes',
    bg: '#FAFAFA',
    border: '#9E9E9E',
    text: '#424242',
    emoji: '⬜',
    description: 'My own understanding & notes',
  },
};

// Default/sample notes for each chapter
export const SAMPLE_NOTES = {
  1: [
    {
      id: 'ch1-1',
      color: 'blue',
      title: 'What is Trading?',
      content:
        'Trading = Buying & selling financial instruments to profit from short-term price changes. Unlike investing (long-term), trading captures shorter moves.',
    },
    {
      id: 'ch1-2',
      color: 'yellow',
      title: 'Pro Tip: Start Small',
      content:
        'Begin with paper trading or very small capital. Learn the process before risking significant money. Consistency > big wins early.',
    },
    {
      id: 'ch1-3',
      color: 'red',
      title: 'Common Beginner Mistake',
      content:
        'Jumping into live trading without a plan. Always define your setup, risk, stop-loss, and target BEFORE entering any trade.',
    },
    {
      id: 'ch1-4',
      color: 'purple',
      title: 'Mindset Foundation',
      content:
        'Trading is a business, not a casino. Approach every session with discipline. Losses are tuition — learn from them.',
    },
  ],
  2: [
    {
      id: 'ch2-1',
      color: 'blue',
      title: 'Candlestick Anatomy',
      content:
        'Open, High, Low, Close (OHLC). Green = Close > Open (bullish). Red = Close < Open (bearish). Body size and wick length tell the story.',
    },
    {
      id: 'ch2-2',
      color: 'green',
      title: 'Entry Signal: Hammer',
      content:
        'Hammer at support zone = bullish reversal signal. Entry: Break above hammer high. Stop: Below hammer low. Target: Next resistance.',
    },
    {
      id: 'ch2-3',
      color: 'red',
      title: 'Do NOT Trade Doji Blindly',
      content:
        'A Doji alone is not a signal. Always wait for the next candle to confirm direction. Trading indecision candles without confirmation = low probability.',
    },
    {
      id: 'ch2-4',
      color: 'yellow',
      title: 'Best Candlestick Patterns',
      content:
        'Most reliable: Pin Bar, Engulfing Candle, Morning/Evening Star. These work best at key support/resistance levels, not in the middle of nowhere.',
    },
  ],
  3: [
    {
      id: 'ch3-1',
      color: 'blue',
      title: 'Support & Resistance',
      content:
        'Support = buyers overpower sellers (price bounces up). Resistance = sellers overpower buyers (price turns down). The more it\'s tested, the more significant the level.',
    },
    {
      id: 'ch3-2',
      color: 'green',
      title: 'Role Reversal Entry',
      content:
        'After a support is broken, price often retests it from below (now as resistance). Entry: Short on first retest of broken support. Stop: Above the retested level.',
    },
    {
      id: 'ch3-3',
      color: 'yellow',
      title: 'Pro Tip: Round Numbers',
      content:
        'Psychological levels (18000, 45000, $100) act as natural support/resistance. Many traders place orders at round numbers — use this to your advantage.',
    },
    {
      id: 'ch3-4',
      color: 'purple',
      title: 'Trend Psychology',
      content:
        'Never fight a strong trend. Many beginners try to "catch the top." Wait for confirmation of trend exhaustion before counter-trend trades.',
    },
  ],
};

// Note card color options for new notes
export const COLOR_OPTIONS = Object.values(NOTE_COLORS);
