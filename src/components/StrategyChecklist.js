import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '../utils/theme';

export default function StrategyChecklist({ items, color }) {
  const [checked, setChecked] = useState({});

  const toggle = (index) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const total = items.length;
  const allGood = checkedCount === total;
  const readyToTrade = checkedCount >= Math.ceil(total * 0.8);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trade Readiness Checklist</Text>
        <View style={[styles.badge, { backgroundColor: allGood ? COLORS.success : readyToTrade ? COLORS.warning : COLORS.danger }]}>
          <Text style={styles.badgeText}>{checkedCount}/{total}</Text>
        </View>
      </View>

      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => toggle(index)}
          activeOpacity={0.7}
        >
          <View style={[
            styles.checkbox,
            checked[index] && { backgroundColor: color, borderColor: color },
          ]}>
            {checked[index] && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={[styles.itemText, checked[index] && styles.itemChecked]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={[
        styles.result,
        { backgroundColor: allGood ? COLORS.success + '22' : readyToTrade ? COLORS.warning + '22' : COLORS.danger + '22' },
      ]}>
        <Text style={[styles.resultText, {
          color: allGood ? COLORS.success : readyToTrade ? COLORS.warning : COLORS.danger,
        }]}>
          {allGood
            ? '✅ All conditions met — Setup is ready!'
            : readyToTrade
            ? '⚠️ Most conditions met — Proceed with caution'
            : '🚫 Too many conditions missing — No Trade recommended'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  badge: {
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: SPACING.xs + 2,
    gap: SPACING.sm,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    flexShrink: 0,
  },
  checkmark: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  itemText: {
    flex: 1,
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  itemChecked: {
    color: COLORS.textMuted,
    textDecorationLine: 'line-through',
  },
  result: {
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginTop: SPACING.md,
  },
  resultText: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '700',
    textAlign: 'center',
  },
});
