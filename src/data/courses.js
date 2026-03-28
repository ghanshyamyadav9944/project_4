// Courses data: 10 chapters from beginner to advanced
export const COURSES = [
  {
    id: 1,
    title: 'Chapter 1: Basics of Trading',
    subtitle: 'What is trading? Markets, players, and fundamentals',
    level: 'Beginner',
    levelColor: '#4CAF50',
    icon: '📘',
    duration: '45 min',
    lessons: 6,
    content: [
      {
        heading: 'What is Trading?',
        body:
          'Trading is the buying and selling of financial instruments—stocks, currencies, commodities, or derivatives—to profit from price changes. Unlike investing (which is long-term), trading focuses on short-to-medium-term price movements.',
      },
      {
        heading: 'Types of Markets',
        body:
          'Stock Market (NSE, BSE): Equity shares of companies.\nForex Market: Currency pairs (USD/INR, EUR/USD).\nCommodity Market: Gold, Silver, Crude Oil.\nDerivatives Market: Futures & Options (F&O).\nCrypto Market: Bitcoin, Ethereum, Altcoins.',
      },
      {
        heading: 'Key Market Participants',
        body:
          'Retail traders: Individual traders like you.\nInstitutional traders: Mutual funds, hedge funds, FIIs.\nMarket makers: Provide liquidity.\nAlgorithmic traders: Use automated systems.\nUnderstanding who moves the market helps predict price behavior.',
      },
      {
        heading: 'How Prices Move',
        body:
          'Prices move due to Supply & Demand imbalances. When more buyers than sellers → price rises. When more sellers than buyers → price falls. News, earnings, economic data, and sentiment drive supply/demand.',
      },
      {
        heading: 'Order Types',
        body:
          'Market Order: Execute immediately at current price.\nLimit Order: Execute only at your specified price or better.\nStop-Loss Order: Exit automatically when price hits a loss level.\nStop-Limit Order: Combines stop and limit features.',
      },
      {
        heading: 'Key Terms You Must Know',
        body:
          'Bid: Highest price buyer will pay.\nAsk: Lowest price seller will accept.\nSpread: Difference between bid and ask.\nLiquidity: Ease of buying/selling without moving price.\nVolatility: Degree of price fluctuation.\nLeverage: Trading larger position than your capital.',
      },
    ],
  },
  {
    id: 2,
    title: 'Chapter 2: Candlesticks & Market Structure',
    subtitle: 'Reading price action through candles and patterns',
    level: 'Beginner',
    levelColor: '#4CAF50',
    icon: '🕯️',
    duration: '60 min',
    lessons: 7,
    content: [
      {
        heading: 'Anatomy of a Candlestick',
        body:
          'A candlestick shows 4 price points for a given time period:\nOpen: Where price started\nClose: Where price ended\nHigh: Highest price reached\nLow: Lowest price reached\nGreen/White candle = Close > Open (Bullish)\nRed/Black candle = Close < Open (Bearish)',
      },
      {
        heading: 'Key Bullish Patterns',
        body:
          'Hammer: Small body, long lower wick — buyers rejected lower prices. Strong reversal signal.\nBullish Engulfing: Large green candle engulfs previous red — momentum shift.\nMorning Star: 3-candle reversal pattern at bottoms.\nDoji: Indecision, price opened and closed near same level.',
      },
      {
        heading: 'Key Bearish Patterns',
        body:
          'Shooting Star: Small body, long upper wick — sellers rejected higher prices.\nBearish Engulfing: Large red candle engulfs previous green candle.\nEvening Star: 3-candle reversal at tops.\nHanging Man: Looks like hammer but appears at highs — bearish signal.',
      },
      {
        heading: 'Market Structure Basics',
        body:
          'Uptrend: Series of Higher Highs (HH) and Higher Lows (HL).\nDowntrend: Series of Lower Highs (LH) and Lower Lows (LL).\nRange/Sideways: Price oscillating between support and resistance levels.\nStructure Break (BOS): When price breaks above/below key swing points, signaling trend change.',
      },
      {
        heading: 'Timeframes and Their Purpose',
        body:
          'Monthly/Weekly: Long-term trend direction.\nDaily: Medium-term bias and key levels.\n4H/1H: Entry/exit zone identification.\n15M/5M: Precise entry timing.\nRule: Always align smaller timeframe trades with higher timeframe trend.',
      },
    ],
  },
  {
    id: 3,
    title: 'Chapter 3: Support, Resistance & Trend',
    subtitle: 'Identifying key levels and trend direction',
    level: 'Beginner',
    levelColor: '#4CAF50',
    icon: '📊',
    duration: '55 min',
    lessons: 6,
    content: [
      {
        heading: 'Support Levels',
        body:
          'Support is a price zone where buying pressure overcomes selling pressure, causing price to bounce up. How to identify: Previous lows, Round numbers (e.g., 18000, 45000), High-volume nodes, Moving averages. The more times price bounces off a level, the stronger the support.',
      },
      {
        heading: 'Resistance Levels',
        body:
          'Resistance is a price zone where selling pressure overcomes buying pressure, causing price to reverse down. Key resistance areas: Previous highs, Round/psychological numbers, Gap areas, Previous support (now flipped to resistance).',
      },
      {
        heading: 'Support/Resistance Flip (Role Reversal)',
        body:
          'When price breaks through support, that support level often becomes new resistance. When price breaks through resistance, that resistance often becomes new support. This flip concept is one of the most powerful tools in technical analysis.',
      },
      {
        heading: 'Trend Analysis',
        body:
          'Uptrend: Draw trendline by connecting Higher Lows. Price respects the line from below — it acts as dynamic support.\nDowntrend: Connect Lower Highs. Price respects from above — dynamic resistance.\nBreak of trendline = potential trend change. Confirm with candle close and volume.',
      },
      {
        heading: 'Moving Averages as Dynamic S/R',
        body:
          '20 EMA: Short-term dynamic support/resistance.\n50 EMA: Medium-term trend indicator.\n200 EMA: Long-term trend separator (price above = bullish, below = bearish).\nEMA crossovers signal momentum shifts.',
      },
    ],
  },
  {
    id: 4,
    title: 'Chapter 4: Risk Management',
    subtitle: 'Stop-loss, position sizing, and protecting capital',
    level: 'Intermediate',
    levelColor: '#FF9800',
    icon: '🛡️',
    duration: '65 min',
    lessons: 7,
    content: [
      {
        heading: 'The Golden Rule of Trading',
        body:
          'Preserve capital first. Profit second. A trader who loses 50% of their capital needs a 100% gain just to break even. Risk management is what separates professionals from gamblers.',
      },
      {
        heading: 'Risk Per Trade',
        body:
          'Never risk more than 1-2% of your total capital on a single trade. Example: ₹1,00,000 capital → Max risk per trade = ₹1,000-₹2,000. This ensures even 10 consecutive losses won\'t destroy your account.',
      },
      {
        heading: 'Stop-Loss Placement',
        body:
          'Place stop-loss BELOW support for long trades and ABOVE resistance for short trades. Common stop-loss methods:\n1. Below swing low (for longs)\n2. Below the entry candle low\n3. ATR-based stop (1.5x ATR from entry)\n4. Percentage-based stop (1-2% from entry)',
      },
      {
        heading: 'Position Sizing Formula',
        body:
          'Position Size = (Capital × Risk %) ÷ (Entry Price - Stop Loss Price)\nExample: Capital = ₹1,00,000, Risk = 1% = ₹1,000\nEntry = ₹500, Stop Loss = ₹490 (₹10 risk per share)\nPosition Size = ₹1,000 ÷ ₹10 = 100 shares',
      },
      {
        heading: 'Risk:Reward Ratio',
        body:
          'Only take trades where potential reward ≥ 2x the risk (1:2 R:R minimum).\nRisk = Entry - Stop Loss\nReward = Target - Entry\nWith 40% win rate and 1:2 R:R → You are still profitable long-term!\nNever compromise on R:R for fear of missing a trade.',
      },
      {
        heading: 'Drawdown Management',
        body:
          'Maximum Drawdown: Largest peak-to-trough decline in your account. Daily loss limit: Stop trading if you lose 3-5% in one day. Monthly limit: Stop if you lose 10-15% in one month. "Live to fight another day" — Step back when drawdown limits are hit.',
      },
    ],
  },
  {
    id: 5,
    title: 'Chapter 5: Intraday Strategies',
    subtitle: 'Day trading setups and execution',
    level: 'Intermediate',
    levelColor: '#FF9800',
    icon: '⚡',
    duration: '70 min',
    lessons: 8,
    content: [
      {
        heading: 'What is Intraday Trading?',
        body:
          'Intraday (Day trading) means buying and selling within the same trading day. Positions are squared off before market close. Best suited for liquid stocks and index derivatives (NIFTY, BANKNIFTY). Requires discipline, speed, and a strict rule-based approach.',
      },
      {
        heading: 'Best Intraday Hours',
        body:
          'First 30 minutes (9:15-9:45): High volatility, avoid unless experienced.\n9:45 AM - 11:30 AM: Best time — trend establishes, good volume.\n1:00 PM - 2:00 PM: Low activity, avoid trading.\n2:00 PM - 3:20 PM: Good momentum often returns.\nAvoid last 10 minutes — unpredictable squaring off.',
      },
      {
        heading: 'Opening Range Breakout (ORB)',
        body:
          'Mark the high and low of first 15-30 minutes after market opens.\nBuy when price breaks above the opening range high with volume.\nSell/Short when price breaks below opening range low with volume.\nStop Loss: Opposite side of the range.\nTarget: 1.5x to 2x the range width.',
      },
      {
        heading: 'VWAP Strategy',
        body:
          'VWAP (Volume Weighted Average Price) = Institutional benchmark.\nBuy setup: Price above VWAP, pulls back to VWAP, bounces with bullish candle.\nSell setup: Price below VWAP, rallies to VWAP, rejects with bearish candle.\nVWAP acts as dynamic intraday support/resistance.',
      },
      {
        heading: 'EMA Pullback for Intraday',
        body:
          'Use 9 EMA and 21 EMA on 15-minute chart.\nBull trend: Price above both EMAs, wait for pullback to 9 EMA, enter on rejection.\nBear trend: Price below both EMAs, wait for rally to 9 EMA, enter on rejection.\nStop: Below 21 EMA (for longs).\nThis is a simple, high-probability setup.',
      },
    ],
  },
  {
    id: 6,
    title: 'Chapter 6: Swing Trading',
    subtitle: 'Capturing multi-day price moves',
    level: 'Intermediate',
    levelColor: '#FF9800',
    icon: '📈',
    duration: '60 min',
    lessons: 6,
    content: [
      {
        heading: 'What is Swing Trading?',
        body:
          'Swing trading captures price moves over 2 days to several weeks. Less stressful than intraday — no need to watch screens all day. Best timeframes: Daily chart for setup, 4H/1H for entry. Ideal for part-time traders with full-time jobs.',
      },
      {
        heading: 'Trend-Following Swing Trades',
        body:
          'In uptrend: Buy at pullbacks to support zones, EMAs, or trendlines.\nIn downtrend: Short at rallies to resistance zones.\nKey rule: Never fight the trend. "Trend is your friend until the end."\nUse weekly chart to confirm the dominant trend before daily entries.',
      },
      {
        heading: 'Swing Trade Entry Criteria',
        body:
          'Minimum checklist before entry:\n✅ Clear trend on daily chart\n✅ Price at key support/resistance\n✅ Confirmation candle (pin bar, engulfing, inside bar break)\n✅ Volume confirmation\n✅ R:R at least 1:2\n✅ No major news event in next 48 hours',
      },
      {
        heading: 'Trailing Stop-Loss',
        body:
          'Move your stop-loss up as price rises (for long trades). Methods:\n1. Swing low trailing: Move SL to each new Higher Low formed.\n2. EMA trailing: Keep SL just below 20 EMA.\n3. Percentage trailing: Move SL up by same % as gain.\nTrailing locks in profits while allowing the trade to run.',
      },
      {
        heading: 'Swing Trade Management',
        body:
          'Book partial profit at Target 1 (1.5x risk). Let remaining position run to Target 2 (3x risk). This ensures you never give back all profits. Move SL to breakeven once T1 is hit. Think in terms of "free trades" after breakeven is achieved.',
      },
    ],
  },
  {
    id: 7,
    title: 'Chapter 7: Psychology & Discipline',
    subtitle: 'The mental game of trading',
    level: 'Intermediate',
    levelColor: '#FF9800',
    icon: '🧠',
    duration: '50 min',
    lessons: 6,
    content: [
      {
        heading: 'Why Psychology Matters',
        body:
          'Studies show 80% of trading success comes from psychology, only 20% from strategy. A perfect strategy fails without emotional control. Common emotions: Fear (of losing), Greed (wanting more), Hope (holding losing trades), Regret (chasing missed moves).',
      },
      {
        heading: 'Common Psychological Traps',
        body:
          'Revenge Trading: Trading larger after a loss to "win it back" — destroys accounts.\nFOMO (Fear of Missing Out): Chasing trades after the move — buying tops, selling bottoms.\nOvertrading: Taking too many trades due to boredom or excitement.\nMoving Stop-Loss: Widening SL to "give trade more room" — emotional, not logical.',
      },
      {
        heading: 'Building a Trading Routine',
        body:
          'Pre-market: Review charts, identify setups, set alerts. (30 min)\nDuring market: Execute plan, no improvisation. (Structured hours)\nPost-market: Review trades taken, log in journal. (15 min)\nWeekly: Review performance, identify patterns in mistakes.',
      },
      {
        heading: 'The Process Mindset',
        body:
          'Focus on executing the process correctly, not on profits. A good trade = correct execution of a valid setup, even if it loses. A bad trade = deviation from your rules, even if it profits. Judge yourself on process, not outcomes. This is how pros think.',
      },
      {
        heading: 'Handling Losses',
        body:
          'Accept that losses are part of trading — even the best have 40-50% win rates.\nAfter a loss: Take a 10-minute break. Review: Was it a valid setup? Did I follow rules?\nIf answer is yes → loss is acceptable, move on.\nIf answer is no → identify what went wrong, fix the behavior.\nNever trade from an emotional state.',
      },
    ],
  },
  {
    id: 8,
    title: 'Chapter 8: Advanced Confluence',
    subtitle: 'Multi-timeframe analysis and combining signals',
    level: 'Advanced',
    levelColor: '#9C27B0',
    icon: '🔬',
    duration: '75 min',
    lessons: 7,
    content: [
      {
        heading: 'What is Confluence?',
        body:
          'Confluence = Multiple independent signals aligning at the same price level. The more factors agree at a single price, the higher the probability of that level holding. Example: Price at support + key Fibonacci level + 200 EMA + oversold RSI = High-confidence buy zone.',
      },
      {
        heading: 'Multi-Timeframe Analysis (MTA)',
        body:
          'The "Three Screen" approach:\n1. Weekly/Daily: Trend direction (the roadmap)\n2. 4H/1H: Setup formation (the area)\n3. 15M/5M: Precise entry trigger (the trigger)\nNever trade against the higher timeframe trend. The HTF trend defines whether you\'re a buyer or seller.',
      },
      {
        heading: 'Fibonacci Retracements',
        body:
          'Key levels: 38.2%, 50%, 61.8% (Golden Zone)\nIn uptrend: Wait for price to retrace to 61.8% (golden zone) and look for bullish reversal candle.\nIn downtrend: Wait for rally to 61.8% and look for bearish candle.\nCombine Fibonacci with support/resistance for high-probability zones.',
      },
      {
        heading: 'Volume Analysis',
        body:
          'Breakout with high volume = Genuine breakout (institutional participation).\nBreakout with low volume = Likely false breakout (trap).\nVolume declining in a trend = Trend losing steam, prepare for reversal.\nHigh volume at support = Institutional buying (accumulation).\nAlways check volume to confirm price action signals.',
      },
      {
        heading: 'Momentum Indicators',
        body:
          'RSI (Relative Strength Index):\n>70 = Overbought (potential short zone)\n<30 = Oversold (potential buy zone)\nRSI Divergence: Price makes new high but RSI makes lower high → hidden weakness.\nMACD: Signal line crossovers + histogram direction for momentum confirmation.',
      },
    ],
  },
  {
    id: 9,
    title: 'Chapter 9: Trade Journal & Performance Review',
    subtitle: 'Track, analyze, and improve your trading',
    level: 'Advanced',
    levelColor: '#9C27B0',
    icon: '📓',
    duration: '40 min',
    lessons: 5,
    content: [
      {
        heading: 'Why Journal Your Trades',
        body:
          'Your journal is your most powerful improvement tool. Without data, you cannot improve systematically. Your journal reveals: Which setups work best for you, Your psychological patterns, Your best trading hours, Your risk management performance over time.',
      },
      {
        heading: 'What to Log in Every Trade',
        body:
          'For every trade, record:\n✅ Date and time\n✅ Instrument (Stock/Index/Forex)\n✅ Setup type (Breakout/Pullback/Reversal)\n✅ Entry price, Stop Loss, Target(s)\n✅ Risk amount (₹) and R:R ratio\n✅ Screenshot of entry/exit chart\n✅ Result (Win/Loss/Breakeven)\n✅ Emotion during trade (Calm/Anxious/Greedy)\n✅ Lesson learned',
      },
      {
        heading: 'Weekly Performance Review',
        body:
          'Every weekend, analyze:\n• Win rate (this week)\n• Average R:R on winning trades vs losing trades\n• Which setup performed best?\n• Any rule violations? (What triggered them?)\n• Equity curve — is it going up consistently?\nSet 1 specific improvement goal for next week.',
      },
      {
        heading: 'Key Performance Metrics',
        body:
          'Expectancy = (Win Rate × Avg Win) − (Loss Rate × Avg Loss)\nPositive expectancy = profitable system over time.\nProfit Factor = Gross Profit ÷ Gross Loss (target >1.5)\nMax Drawdown: Track carefully — should stay within acceptable limits.\nThese numbers tell you if your system has an edge.',
      },
    ],
  },
  {
    id: 10,
    title: 'Chapter 10: Personal Trading Plan',
    subtitle: 'Build your rules-based trading framework',
    level: 'Advanced',
    levelColor: '#9C27B0',
    icon: '🗺️',
    duration: '50 min',
    lessons: 6,
    content: [
      {
        heading: 'What is a Trading Plan?',
        body:
          'A trading plan is your personal rule book. It defines: What setups you trade, When you trade, How much you risk, How you manage trades, When you stop for the day/week. Without a plan, you are gambling. With a plan, you are running a business.',
      },
      {
        heading: 'Your Trading Plan Checklist',
        body:
          '1. Market/Instrument: What will you trade? (NIFTY50, specific stocks)\n2. Timeframe: Which timeframes for analysis and entry?\n3. Setup criteria: Exact conditions required to take a trade\n4. Risk rules: Max risk per trade, daily limit, weekly limit\n5. Entry/Exit rules: How will you enter? How will you exit?\n6. Review process: How and when will you review performance?',
      },
      {
        heading: 'Defining Your Edge',
        body:
          'Your "edge" is what makes your strategy work over many trades. Find your edge by: Backtesting on 100+ historical setups, Forward testing in demo/small account, Identifying your highest win-rate setups. Once you find your edge, exploit it consistently and ignore everything else.',
      },
      {
        heading: 'Building Consistency',
        body:
          'Trade the same setups, same way, every day. Consistency in execution → Consistent results. Many traders fail because they keep changing strategies before giving any one strategy enough time to prove itself. Give your system at least 50-100 trades before judging it.',
      },
      {
        heading: 'Continuous Improvement',
        body:
          'The best traders are always learning. Monthly habits:\n• Read 1 trading book\n• Review and update your trading plan\n• Backtest 1 new strategy variation\n• Study 10-20 historical chart setups\n• Connect with other disciplined traders\nTrading mastery is a continuous journey, not a destination.',
      },
    ],
  },
];
