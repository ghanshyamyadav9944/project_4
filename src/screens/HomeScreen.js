import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS, DISCLAIMER } from '../utils/theme';
import { COURSES } from '../data/courses';
import { STRATEGIES } from '../data/strategies';

export default function HomeScreen({ navigation }) {
  const quickActions = [
    { label: 'Trade\nSetup', icon: '🔍', screen: 'TradeSetup', color: COLORS.primary },
    { label: 'Courses', icon: '📚', screen: 'Courses', color: COLORS.success },
    { label: 'Strategies', icon: '⚡', screen: 'Strategies', color: COLORS.warning },
    { label: 'Notebook', icon: '📓', screen: 'Notebook', color: COLORS.purple },
    { label: 'Membership', icon: '👑', screen: 'Membership', color: '#FFD700' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning, Trader 👋</Text>
            <Text style={styles.tagline}>Learn. Analyse. Trade Smart.</Text>
          </View>
          <TouchableOpacity
            style={styles.memberBtn}
            onPress={() => navigation.navigate('Membership')}
          >
            <Text style={styles.memberBtnText}>👑 Pro</Text>
          </TouchableOpacity>
        </View>

        {/* Disclaimer Banner */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            ⚠️ Educational content only — not financial advice.
          </Text>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickActions}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.screen}
              style={[styles.actionBtn, { borderColor: action.color + '44' }]}
              onPress={() => navigation.navigate(action.screen)}
              activeOpacity={0.8}
            >
              <View style={[styles.actionIcon, { backgroundColor: action.color + '22' }]}>
                <Text style={styles.actionEmoji}>{action.icon}</Text>
              </View>
              <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Trade Setup CTA */}
        <TouchableOpacity
          style={styles.tradeCTA}
          onPress={() => navigation.navigate('TradeSetup')}
          activeOpacity={0.9}
        >
          <View style={styles.ctaContent}>
            <Text style={styles.ctaTitle}>🔍 Analyse a Trade Setup</Text>
            <Text style={styles.ctaSubtitle}>
              Get Buy / Sell / No Trade signal with Stop Loss, Target & full reasoning
            </Text>
          </View>
          <Text style={styles.ctaArrow}>→</Text>
        </TouchableOpacity>

        {/* Featured Strategies */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top 5 Strategies</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Strategies')}>
            <Text style={styles.seeAll}>See all →</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {STRATEGIES.map((s) => (
            <TouchableOpacity
              key={s.id}
              style={[styles.strategyCard, { borderColor: s.color + '55' }]}
              onPress={() => navigation.navigate('StrategyDetail', { strategy: s })}
              activeOpacity={0.85}
            >
              <Text style={styles.stratIcon}>{s.icon}</Text>
              <Text style={[styles.stratTitle, { color: s.color }]} numberOfLines={2}>
                {s.title}
              </Text>
              <Text style={styles.stratSub} numberOfLines={2}>{s.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Courses Preview */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Learning Path</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
            <Text style={styles.seeAll}>See all →</Text>
          </TouchableOpacity>
        </View>

        {COURSES.slice(0, 3).map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseRow}
            onPress={() => navigation.navigate('ChapterDetail', { course })}
            activeOpacity={0.85}
          >
            <Text style={styles.courseIcon}>{course.icon}</Text>
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle} numberOfLines={1}>{course.title}</Text>
              <Text style={styles.courseMeta}>{course.level} · {course.duration}</Text>
            </View>
            <View style={[styles.levelDot, { backgroundColor: course.levelColor }]} />
          </TouchableOpacity>
        ))}

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
  },
  greeting: {
    fontSize: FONTS.sizes.xxl,
    fontWeight: '800',
    color: COLORS.textPrimary,
  },
  tagline: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  memberBtn: {
    backgroundColor: '#FFD70022',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.md,
    paddingVertical: 6,
  },
  memberBtnText: {
    fontSize: FONTS.sizes.sm,
    color: '#FFD700',
    fontWeight: '700',
  },
  disclaimer: {
    backgroundColor: COLORS.warning + '22',
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.warning + '44',
    padding: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  disclaimerText: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.warning,
    textAlign: 'center',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
    marginTop: SPACING.md,
  },
  seeAll: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xl,
    flexWrap: 'nowrap',
  },
  actionBtn: {
    alignItems: 'center',
    width: '18%',
    borderRadius: RADIUS.md,
    borderWidth: 1,
    padding: SPACING.sm,
    backgroundColor: COLORS.card,
  },
  actionIcon: {
    width: 38,
    height: 38,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  actionEmoji: {
    fontSize: 18,
  },
  actionLabel: {
    fontSize: 10,
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontWeight: '600',
  },
  tradeCTA: {
    backgroundColor: COLORS.primary + '18',
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xxl,
  },
  ctaContent: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 4,
  },
  ctaSubtitle: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textSecondary,
    lineHeight: 17,
  },
  ctaArrow: {
    fontSize: 24,
    color: COLORS.primary,
    marginLeft: SPACING.md,
  },
  horizontalScroll: {
    paddingRight: SPACING.xl,
    marginBottom: SPACING.md,
  },
  strategyCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    width: 160,
    marginRight: SPACING.md,
    borderWidth: 1,
  },
  stratIcon: {
    fontSize: 28,
    marginBottom: SPACING.sm,
  },
  stratTitle: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '800',
    lineHeight: 18,
    marginBottom: 4,
  },
  stratSub: {
    fontSize: 11,
    color: COLORS.textSecondary,
    lineHeight: 15,
  },
  courseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  courseIcon: {
    fontSize: 20,
    marginRight: SPACING.md,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  courseMeta: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  levelDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  bottomSpace: {
    height: SPACING.xxxl,
  },
});
