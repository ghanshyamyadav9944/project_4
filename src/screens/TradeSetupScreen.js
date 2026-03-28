import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS, DISCLAIMER } from '../utils/theme';

function calcTradeSetup({ entryPrice, stopLossPrice, riskReward, bias }) {
  const ep = parseFloat(entryPrice);
  const sl = parseFloat(stopLossPrice);
  const rr = parseFloat(riskReward) || 2;

  if (isNaN(ep) || isNaN(sl) || ep <= 0 || sl <= 0) return null;

  const risk = Math.abs(ep - sl);
  const target1 = bias === 'BUY' ? ep + risk * rr : ep - risk * rr;
  const target2 = bias === 'BUY' ? ep + risk * (rr + 1) : ep - risk * (rr + 1);
  const rrActual = risk > 0 ? (Math.abs(target1 - ep) / risk).toFixed(2) : '—';

  return { risk: risk.toFixed(2), target1: target1.toFixed(2), target2: target2.toFixed(2), rrActual };
}

function getExplanation(bias, form) {
  const ep = parseFloat(form.entryPrice);
  const sl = parseFloat(form.stopLossPrice);
  const symbol = form.symbol || 'the instrument';
  const tf = form.timeframe || 'selected';
  const dist = Math.abs(ep - sl).toFixed(2);

  if (bias === 'BUY') {
    return {
      whyTake: [
        `Price is at a key support zone near ₹${ep}, offering a high-probability bounce opportunity.`,
        `Risk is well-defined at ₹${dist} below entry (stop at ₹${sl}), giving a clear invalidation level.`,
        `If trend is intact, ${symbol} has room to move to target with a positive Risk:Reward ratio.`,
        'Confirmation candlestick (hammer/engulfing) indicates buying pressure at this level.',
        `The ${tf} timeframe shows structure aligned with a bullish setup.`,
      ],
      whyAvoid: [
        'If the overall market (NIFTY/Sensex) is in a strong downtrend, even good setups can fail.',
        'A news event or earnings announcement can invalidate technical setups instantly.',
        'If volume on the entry candle is low, institutional support may be absent.',
        'Counter-trend trades in a strong bear market carry higher failure rates.',
        'If the risk amount exceeds 1-2% of your capital, the position size is too large.',
      ],
    };
  } else if (bias === 'SELL') {
    return {
      whyTake: [
        `Price has hit a strong resistance zone near ₹${ep}, showing historical rejection history.`,
        `Risk is limited to ₹${dist} above entry (stop at ₹${sl}), providing a clear stop-out level.`,
        `${symbol} is showing bearish pressure signs — potential for a significant downside move.`,
        'Bearish reversal candlestick (shooting star/bearish engulfing) confirms seller dominance.',
        `The ${tf} timeframe structure supports a bearish directional bias.`,
      ],
      whyAvoid: [
        'Shorting in a fundamentally strong bull market carries high whipsaw risk.',
        'A sudden positive news catalyst can cause a gap-up, bypassing your stop.',
        'If the resistance level is weak (only tested once), it may break on this attempt.',
        'Low volume on bearish candle = potential trap — smart money may be buying.',
        'Ensure regulatory compliance for shorting (F&O required for intraday shorting in India).',
      ],
    };
  } else {
    return {
      whyTake: ['No compelling trade setup at this time — waiting preserves your capital.'],
      whyAvoid: [
        'The market structure is unclear — no defined trend or consolidation with clear direction.',
        'Risk:Reward ratio is unfavorable — potential loss exceeds potential reward.',
        'Entry zone is between major support and resistance — no clean trade location.',
        'Better setups will emerge — patience is a professional trading skill.',
        'Forcing trades in neutral markets leads to unnecessary losses.',
      ],
    };
  }
}

export default function TradeSetupScreen() {
  const [form, setForm] = useState({
    symbol: '',
    timeframe: '15M',
    entryPrice: '',
    stopLossPrice: '',
    riskReward: '2',
  });
  const [result, setResult] = useState(null);
  const [bias, setBias] = useState('BUY');

  const timeframes = ['1M', '5M', '15M', '1H', '4H', 'Daily'];

  const analyse = () => {
    if (!form.entryPrice || !form.stopLossPrice) {
      Alert.alert('Missing Info', 'Please enter Entry Price and Stop Loss Price.');
      return;
    }

    const ep = parseFloat(form.entryPrice);
    const sl = parseFloat(form.stopLossPrice);

    if (isNaN(ep) || isNaN(sl)) {
      Alert.alert('Invalid Input', 'Please enter valid numeric prices.');
      return;
    }

    const calc = calcTradeSetup({ ...form, bias });
    const explanation = getExplanation(bias, form);

    let finalBias = bias;
    if (parseFloat(calc.rrActual) < 1.5) {
      finalBias = 'NO_TRADE';
    }

    setResult({ ...calc, bias: finalBias, explanation: getExplanation(finalBias, form) });
  };

  const biasColor = {
    BUY: COLORS.buy,
    SELL: COLORS.sell,
    NO_TRADE: COLORS.noTrade,
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>{DISCLAIMER}</Text>
        </View>

        {/* Form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trade Setup Details</Text>

          <Text style={styles.label}>Symbol (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. NIFTY, RELIANCE, BTCUSDT"
            placeholderTextColor={COLORS.textMuted}
            value={form.symbol}
            onChangeText={(v) => setForm({ ...form, symbol: v })}
            autoCapitalize="characters"
          />

          <Text style={styles.label}>Timeframe</Text>
          <View style={styles.tfRow}>
            {timeframes.map((tf) => (
              <TouchableOpacity
                key={tf}
                style={[styles.tfBtn, form.timeframe === tf && styles.tfBtnActive]}
                onPress={() => setForm({ ...form, timeframe: tf })}
              >
                <Text style={[styles.tfText, form.timeframe === tf && styles.tfTextActive]}>
                  {tf}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Entry Price (₹)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 500"
            placeholderTextColor={COLORS.textMuted}
            value={form.entryPrice}
            onChangeText={(v) => setForm({ ...form, entryPrice: v })}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Stop Loss Price (₹)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 490"
            placeholderTextColor={COLORS.textMuted}
            value={form.stopLossPrice}
            onChangeText={(v) => setForm({ ...form, stopLossPrice: v })}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Target Risk:Reward Ratio</Text>
          <View style={styles.tfRow}>
            {['1.5', '2', '2.5', '3'].map((rr) => (
              <TouchableOpacity
                key={rr}
                style={[styles.tfBtn, form.riskReward === rr && styles.tfBtnActive]}
                onPress={() => setForm({ ...form, riskReward: rr })}
              >
                <Text style={[styles.tfText, form.riskReward === rr && styles.tfTextActive]}>
                  1:{rr}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Trade Direction</Text>
          <View style={styles.biasRow}>
            {['BUY', 'SELL', 'NO_TRADE'].map((b) => (
              <TouchableOpacity
                key={b}
                style={[styles.biasBtn, bias === b && { backgroundColor: biasColor[b], borderColor: biasColor[b] }]}
                onPress={() => setBias(b)}
              >
                <Text style={[styles.biasText, bias === b && { color: '#FFF', fontWeight: '800' }]}>
                  {b === 'NO_TRADE' ? '🚫 No Trade' : b === 'BUY' ? '🟢 BUY' : '🔴 SELL'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.analyseBtn} onPress={analyse} activeOpacity={0.85}>
          <Text style={styles.analyseBtnText}>🔍 Analyse Setup</Text>
        </TouchableOpacity>

        {/* Result */}
        {result && (
          <View style={styles.resultContainer}>
            {/* Signal Badge */}
            <View style={[styles.signalBadge, { backgroundColor: biasColor[result.bias] + '22', borderColor: biasColor[result.bias] }]}>
              <Text style={[styles.signalText, { color: biasColor[result.bias] }]}>
                {result.bias === 'BUY'
                  ? '🟢 BUY SIGNAL'
                  : result.bias === 'SELL'
                  ? '🔴 SELL SIGNAL'
                  : '🚫 NO TRADE'}
              </Text>
              {result.bias !== 'NO_TRADE' && (
                <Text style={[styles.rrText, { color: biasColor[result.bias] }]}>
                  R:R = 1:{result.rrActual}
                </Text>
              )}
            </View>

            {/* Price Levels */}
            {result.bias !== 'NO_TRADE' && (
              <View style={styles.levelsGrid}>
                <View style={[styles.levelBox, { borderColor: COLORS.danger }]}>
                  <Text style={styles.levelLabel}>Stop Loss</Text>
                  <Text style={[styles.levelValue, { color: COLORS.danger }]}>₹{form.stopLossPrice}</Text>
                  <Text style={styles.levelRisk}>Risk: ₹{result.risk}/share</Text>
                </View>
                <View style={[styles.levelBox, { borderColor: COLORS.success }]}>
                  <Text style={styles.levelLabel}>Target 1</Text>
                  <Text style={[styles.levelValue, { color: COLORS.success }]}>₹{result.target1}</Text>
                  <Text style={styles.levelRisk}>1:{result.rrActual} R:R</Text>
                </View>
                <View style={[styles.levelBox, { borderColor: COLORS.primary }]}>
                  <Text style={styles.levelLabel}>Target 2</Text>
                  <Text style={[styles.levelValue, { color: COLORS.primary }]}>₹{result.target2}</Text>
                  <Text style={styles.levelRisk}>Extended</Text>
                </View>
              </View>
            )}

            {/* Why Take the Trade */}
            <View style={[styles.reasonBox, { borderLeftColor: COLORS.success }]}>
              <Text style={[styles.reasonTitle, { color: COLORS.success }]}>
                ✅ Why {result.bias === 'NO_TRADE' ? 'Sit Out' : 'Take This Trade'}
              </Text>
              {result.explanation.whyTake.map((r, i) => (
                <Text key={i} style={styles.reasonItem}>• {r}</Text>
              ))}
            </View>

            {/* Why Not Take */}
            <View style={[styles.reasonBox, { borderLeftColor: COLORS.danger }]}>
              <Text style={[styles.reasonTitle, { color: COLORS.danger }]}>
                ⚠️ Why You Should Avoid{result.bias === 'NO_TRADE' ? ' Forcing a Trade' : ' or Skip'}
              </Text>
              {result.explanation.whyAvoid.map((r, i) => (
                <Text key={i} style={styles.reasonItem}>• {r}</Text>
              ))}
            </View>

            <View style={[styles.eduNote, { backgroundColor: COLORS.primary + '11', borderColor: COLORS.primary + '33' }]}>
              <Text style={styles.eduNoteText}>
                📚 This analysis is purely educational. Past patterns do not guarantee future results. Always use a stop-loss and risk only what you can afford to lose.
              </Text>
            </View>
          </View>
        )}
        <View style={{ height: 32 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.xl },
  disclaimer: {
    backgroundColor: COLORS.warning + '18',
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.warning + '44',
    padding: SPACING.md,
    marginBottom: SPACING.xl,
  },
  disclaimerText: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.warning,
    lineHeight: 17,
  },
  section: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    marginBottom: SPACING.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: SPACING.lg,
  },
  label: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    fontWeight: '600',
    marginBottom: SPACING.xs,
    marginTop: SPACING.md,
  },
  input: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    fontSize: FONTS.sizes.md,
    color: COLORS.textPrimary,
  },
  tfRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  tfBtn: {
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.md,
    paddingVertical: 6,
    backgroundColor: COLORS.surface,
  },
  tfBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  tfText: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  tfTextActive: {
    color: '#000',
    fontWeight: '800',
  },
  biasRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    flexWrap: 'wrap',
  },
  biasBtn: {
    flex: 1,
    borderRadius: RADIUS.md,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    backgroundColor: COLORS.surface,
  },
  biasText: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    fontWeight: '700',
  },
  analyseBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  analyseBtnText: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '800',
    color: '#000',
  },
  resultContainer: {
    gap: SPACING.lg,
  },
  signalBadge: {
    borderRadius: RADIUS.xl,
    borderWidth: 2,
    padding: SPACING.xl,
    alignItems: 'center',
  },
  signalText: {
    fontSize: FONTS.sizes.xxl,
    fontWeight: '900',
    letterSpacing: 1,
  },
  rrText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    marginTop: 4,
  },
  levelsGrid: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  levelBox: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1.5,
    padding: SPACING.md,
    alignItems: 'center',
  },
  levelLabel: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textMuted,
    fontWeight: '600',
    marginBottom: 4,
  },
  levelValue: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '800',
  },
  levelRisk: {
    fontSize: 10,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  reasonBox: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    borderLeftWidth: 4,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  reasonTitle: {
    fontSize: FONTS.sizes.md,
    fontWeight: '800',
    marginBottom: SPACING.md,
  },
  reasonItem: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: SPACING.xs,
  },
  eduNote: {
    borderRadius: RADIUS.md,
    borderWidth: 1,
    padding: SPACING.md,
  },
  eduNoteText: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.primary,
    lineHeight: 17,
    textAlign: 'center',
  },
});
