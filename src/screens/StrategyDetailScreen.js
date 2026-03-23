import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '../utils/theme';
import StrategyChecklist from '../components/StrategyChecklist';

const TABS = ['Overview', 'Entry Rules', 'Stop Loss', 'Targets', 'Avoid', 'Checklist'];

export default function StrategyDetailScreen({ route, navigation }) {
  const { strategy } = route.params;
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <View style={styles.tabContent}>
            <View style={[styles.overviewHero, { borderColor: strategy.color + '55', backgroundColor: strategy.lightColor }]}>
              <Text style={styles.overviewIcon}>{strategy.icon}</Text>
              <Text style={[styles.overviewTitle, { color: strategy.color }]}>{strategy.title}</Text>
              <Text style={styles.overviewSub}>{strategy.subtitle}</Text>
            </View>
            <Text style={styles.cardTitle}>When To Use This Strategy</Text>
            <Text style={styles.bodyText}>{strategy.whenToUse}</Text>
          </View>
        );
      case 1:
        return renderRulesList('🟢 Entry Rules', strategy.entryRules, COLORS.success);
      case 2:
        return renderRulesList('🛑 Stop-Loss Rules', strategy.stopLossRules, COLORS.danger);
      case 3:
        return renderRulesList('🎯 Target Rules', strategy.targetRules, COLORS.primary);
      case 4:
        return renderRulesList('🚫 When NOT To Trade', strategy.whenNotToTrade, COLORS.warning);
      case 5:
        return (
          <View style={styles.tabContent}>
            <StrategyChecklist items={strategy.checklist} color={strategy.color} />
            <View style={[styles.noteCard, { backgroundColor: strategy.lightColor, borderColor: strategy.color + '44' }]}>
              <Text style={[styles.noteCardTitle, { color: strategy.color }]}>💡 Pro Trading Rule</Text>
              <Text style={[styles.noteCardText, { color: strategy.color }]}>
                If 2 or more checklist items fail — that's a "No Trade" signal. Protecting your capital on bad setups is more important than catching every move.
              </Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  const renderRulesList = (title, rules, color) => (
    <View style={styles.tabContent}>
      <View style={[styles.rulesCard, { borderLeftColor: color }]}>
        <Text style={[styles.rulesTitle, { color }]}>{title}</Text>
        {rules.map((rule, i) => (
          <View key={i} style={styles.ruleItem}>
            <View style={[styles.ruleBullet, { backgroundColor: color }]}>
              <Text style={styles.ruleBulletText}>{i + 1}</Text>
            </View>
            <Text style={styles.ruleText}>{rule}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tab Bar */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabBar}
        style={[styles.tabBarWrapper, { borderBottomColor: COLORS.border }]}
      >
        {TABS.map((tab, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.tabBtn, activeTab === i && { borderBottomColor: strategy.color, borderBottomWidth: 2 }]}
            onPress={() => setActiveTab(i)}
          >
            <Text style={[styles.tabText, activeTab === i && { color: strategy.color, fontWeight: '800' }]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {renderTabContent()}

        {/* Add to Notebook CTA */}
        <TouchableOpacity
          style={[styles.notebookCta, { borderColor: strategy.color }]}
          onPress={() => navigation.navigate('Notebook')}
          activeOpacity={0.85}
        >
          <Text style={styles.notebookCtaText}>📓 Add to Smart Notebook</Text>
        </TouchableOpacity>

        <View style={{ height: SPACING.xxxl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  tabBarWrapper: {
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
  },
  tabBar: {
    paddingHorizontal: SPACING.md,
  },
  tabBtn: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  content: { padding: SPACING.xl },
  tabContent: { gap: SPACING.lg },
  overviewHero: {
    borderRadius: RADIUS.xl,
    borderWidth: 1.5,
    padding: SPACING.xxl,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  overviewIcon: { fontSize: 52, marginBottom: SPACING.md },
  overviewTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: SPACING.sm,
  },
  overviewSub: {
    fontSize: FONTS.sizes.sm,
    color: '#555',
    textAlign: 'center',
    lineHeight: 18,
  },
  cardTitle: {
    fontSize: FONTS.sizes.md,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  bodyText: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    lineHeight: 21,
  },
  rulesCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    borderLeftWidth: 4,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  rulesTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '800',
    marginBottom: SPACING.lg,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
    gap: SPACING.md,
  },
  ruleBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: 1,
  },
  ruleBulletText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFF',
  },
  ruleText: {
    flex: 1,
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  noteCard: {
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    padding: SPACING.lg,
  },
  noteCardTitle: {
    fontSize: FONTS.sizes.md,
    fontWeight: '800',
    marginBottom: SPACING.sm,
  },
  noteCardText: {
    fontSize: FONTS.sizes.sm,
    lineHeight: 20,
    opacity: 0.8,
  },
  notebookCta: {
    borderRadius: RADIUS.xl,
    borderWidth: 1.5,
    padding: SPACING.lg,
    alignItems: 'center',
    marginTop: SPACING.xl,
    backgroundColor: COLORS.card,
  },
  notebookCtaText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
});
