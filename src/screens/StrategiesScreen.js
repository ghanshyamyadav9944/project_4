import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '../utils/theme';
import { STRATEGIES } from '../data/strategies';

export default function StrategiesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={STRATEGIES}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <>
            <Text style={styles.heading}>Top 5 Strategies</Text>
            <Text style={styles.subheading}>
              Proven, rules-based trading strategies with detailed entry, SL, target, and checklist.
            </Text>
            <View style={[styles.disclaimer, { backgroundColor: COLORS.warning + '18', borderColor: COLORS.warning + '44' }]}>
              <Text style={[styles.disclaimerText, { color: COLORS.warning }]}>
                ⚠️ Educational content only. Not financial advice. Always backtest before using.
              </Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { borderColor: item.color + '55' }]}
            onPress={() => navigation.navigate('StrategyDetail', { strategy: item })}
            activeOpacity={0.85}
          >
            <View style={styles.cardLeft}>
              <Text style={styles.cardIcon}>{item.icon}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={[styles.cardNum, { color: item.color }]}>Strategy {item.id}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub} numberOfLines={2}>{item.subtitle}</Text>
              <View style={styles.cardTags}>
                <View style={[styles.tag, { backgroundColor: item.color + '22' }]}>
                  <Text style={[styles.tagText, { color: item.color }]}>
                    {item.checklist.length} checklist items
                  </Text>
                </View>
                <View style={[styles.tag, { backgroundColor: item.color + '22' }]}>
                  <Text style={[styles.tagText, { color: item.color }]}>
                    Full rules →
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={{ height: SPACING.xxxl }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.xl },
  heading: {
    fontSize: FONTS.sizes.xxl,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  subheading: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    lineHeight: 19,
    marginBottom: SPACING.lg,
  },
  disclaimer: {
    borderRadius: RADIUS.md,
    borderWidth: 1,
    padding: SPACING.md,
    marginBottom: SPACING.xl,
  },
  disclaimerText: { fontSize: FONTS.sizes.xs, lineHeight: 17 },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    borderWidth: 1.5,
    alignItems: 'flex-start',
  },
  cardLeft: {
    width: 52,
    height: 52,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
    flexShrink: 0,
  },
  cardIcon: { fontSize: 26 },
  cardBody: { flex: 1 },
  cardNum: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  cardTitle: {
    fontSize: FONTS.sizes.md,
    fontWeight: '800',
    color: COLORS.textPrimary,
    lineHeight: 20,
    marginBottom: 4,
  },
  cardSub: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textSecondary,
    lineHeight: 17,
    marginBottom: SPACING.sm,
  },
  cardTags: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  tag: {
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
  },
});
