import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '../utils/theme';

const FEATURES_FREE = [
  { label: '3 Chapters (Basics only)', included: true },
  { label: 'Basic Trade Setup Analysis', included: true },
  { label: 'Smart Notebook (5 notes)', included: true },
  { label: 'Full 10-Chapter Course', included: false },
  { label: 'All 5 Strategy Sections', included: false },
  { label: 'Unlimited Smart Notes', included: false },
  { label: 'Advanced Confluence Chapter', included: false },
  { label: 'Trade Journal & Review Tools', included: false },
  { label: 'Priority Support', included: false },
];

const FEATURES_PRO = [
  { label: 'Full 10-Chapter Course Access', included: true },
  { label: 'All 5 Strategy Sections (with rules)', included: true },
  { label: 'Unlimited Smart Notebook', included: true },
  { label: 'Advanced Trade Setup Analyser', included: true },
  { label: 'Trade Journal & Performance Review', included: true },
  { label: 'Personal Trading Plan Builder', included: true },
  { label: 'New Chapter Updates (Free)', included: true },
  { label: 'Priority Support', included: true },
  { label: 'Community Access', included: true },
];

const TESTIMONIALS = [
  {
    name: 'Rahul M.',
    role: 'Intraday Trader',
    text: 'The structured approach changed how I think about risk. No more random trades!',
    stars: 5,
  },
  {
    name: 'Priya S.',
    role: 'Swing Trader',
    text: 'The Smart Notebook and Strategy checklists are incredible for staying disciplined.',
    stars: 5,
  },
  {
    name: 'Amit K.',
    role: 'Beginner Trader',
    text: 'Started from zero. The beginner-to-advanced path makes trading finally understandable.',
    stars: 5,
  },
];

export default function MembershipScreen() {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const handleSubscribe = () => {
    Alert.alert(
      '🚀 Coming Soon',
      'Razorpay payment integration will be live soon!\n\nPlan: ₹1,999/year\n\nYou will get full access to all 10 chapters, 5 strategies, unlimited smart notebook, and more.',
      [{ text: 'Got It!', style: 'default' }]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>👑</Text>
          <Text style={styles.heroTitle}>Unlock Your Full Potential</Text>
          <Text style={styles.heroSub}>
            Get unrestricted access to the complete trading education platform
          </Text>
        </View>

        {/* Pricing Card */}
        <View style={styles.pricingCard}>
          <View style={styles.proBadge}>
            <Text style={styles.proBadgeText}>✨ BEST VALUE</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.currency}>₹</Text>
            <Text style={styles.price}>1,999</Text>
            <View style={styles.pricePeriod}>
              <Text style={styles.periodLine}>/</Text>
              <Text style={styles.period}>year</Text>
            </View>
          </View>

          <View style={styles.pricingBreakdown}>
            <Text style={styles.breakdownText}>
              That's only ₹166/month — less than a cup of coffee ☕
            </Text>
            <View style={styles.savingsTag}>
              <Text style={styles.savingsText}>Save 58% vs monthly plans</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.subscribeBtn} onPress={handleSubscribe} activeOpacity={0.85}>
            <Text style={styles.subscribeBtnText}>🚀 Get Pro Access — ₹1,999/year</Text>
          </TouchableOpacity>

          <Text style={styles.trialNote}>✓ 7-day money-back guarantee · No hidden fees</Text>
        </View>

        {/* Plan Comparison */}
        <Text style={styles.sectionTitle}>What's Included</Text>

        <View style={styles.plansRow}>
          {/* Free Plan */}
          <View style={[styles.planColumn, { borderColor: COLORS.border }]}>
            <Text style={styles.planName}>Free</Text>
            <Text style={[styles.planPrice, { color: COLORS.textSecondary }]}>₹0</Text>
            {FEATURES_FREE.map((f, i) => (
              <View key={i} style={styles.featureRow}>
                <Text style={[styles.featureIcon, { color: f.included ? COLORS.success : COLORS.textMuted }]}>
                  {f.included ? '✓' : '✗'}
                </Text>
                <Text style={[styles.featureText, !f.included && { color: COLORS.textMuted, opacity: 0.5 }]}>
                  {f.label}
                </Text>
              </View>
            ))}
          </View>

          {/* Pro Plan */}
          <View style={[styles.planColumn, styles.proPlan, { borderColor: '#FFD700' }]}>
            <View style={styles.proLabel}>
              <Text style={styles.proLabelText}>👑 PRO</Text>
            </View>
            <Text style={[styles.planPrice, { color: '#FFD700' }]}>₹1,999/yr</Text>
            {FEATURES_PRO.map((f, i) => (
              <View key={i} style={styles.featureRow}>
                <Text style={[styles.featureIcon, { color: COLORS.success }]}>✓</Text>
                <Text style={[styles.featureText, { color: COLORS.textPrimary }]}>{f.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Testimonials */}
        <Text style={styles.sectionTitle}>What Members Say</Text>
        {TESTIMONIALS.map((t, i) => (
          <View key={i} style={styles.testimonialCard}>
            <View style={styles.testimonialHeader}>
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>{t.name[0]}</Text>
              </View>
              <View style={styles.testimonialMeta}>
                <Text style={styles.testimonialName}>{t.name}</Text>
                <Text style={styles.testimonialRole}>{t.role}</Text>
              </View>
              <Text style={styles.stars}>{'⭐'.repeat(t.stars)}</Text>
            </View>
            <Text style={styles.testimonialText}>"{t.text}"</Text>
          </View>
        ))}

        {/* Bottom CTA */}
        <TouchableOpacity style={styles.bottomCta} onPress={handleSubscribe} activeOpacity={0.9}>
          <Text style={styles.bottomCtaTitle}>Start Your Trading Education Today</Text>
          <Text style={styles.bottomCtaSub}>₹1,999/year · 7-day money-back guarantee</Text>
          <Text style={styles.bottomCtaBtn}>Get Started →</Text>
        </TouchableOpacity>

        <View style={styles.legalNote}>
          <Text style={styles.legalText}>
            ⚠️ TradingEdu provides educational content about trading concepts and strategies. It does not provide financial advice, investment recommendations, or trading signals. All content is for educational purposes only. Trading involves substantial risk of loss. Past performance is not indicative of future results. Always consult a SEBI-registered financial advisor before making any investment decisions.
          </Text>
        </View>

        <View style={{ height: SPACING.xxxl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.xl },
  hero: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
    marginBottom: SPACING.xl,
  },
  heroEmoji: { fontSize: 60, marginBottom: SPACING.md },
  heroTitle: {
    fontSize: FONTS.sizes.xxl,
    fontWeight: '900',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  heroSub: {
    fontSize: FONTS.sizes.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  pricingCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: RADIUS.xl,
    borderWidth: 2,
    borderColor: '#FFD700',
    padding: SPACING.xxl,
    alignItems: 'center',
    marginBottom: SPACING.xxl,
    overflow: 'visible',
  },
  proBadge: {
    backgroundColor: '#FFD700',
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 4,
    marginBottom: SPACING.lg,
  },
  proBadgeText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 1,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
  },
  currency: {
    fontSize: FONTS.sizes.xl,
    color: '#FFD700',
    fontWeight: '700',
    marginTop: 8,
  },
  price: {
    fontSize: 56,
    fontWeight: '900',
    color: '#FFD700',
    lineHeight: 64,
  },
  pricePeriod: {
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  periodLine: {
    fontSize: FONTS.sizes.xl,
    color: COLORS.textMuted,
  },
  period: {
    fontSize: FONTS.sizes.md,
    color: COLORS.textMuted,
    fontWeight: '600',
  },
  pricingBreakdown: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
    gap: SPACING.sm,
  },
  breakdownText: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  savingsTag: {
    backgroundColor: COLORS.success + '22',
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.md,
    paddingVertical: 4,
  },
  savingsText: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.success,
    fontWeight: '700',
  },
  subscribeBtn: {
    backgroundColor: '#FFD700',
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    alignItems: 'center',
    width: '100%',
    marginBottom: SPACING.md,
  },
  subscribeBtnText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '900',
    color: '#000',
  },
  trialNote: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: SPACING.lg,
    marginTop: SPACING.md,
  },
  plansRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.xxl,
  },
  planColumn: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
  },
  proPlan: {
    backgroundColor: '#1A1A2E',
  },
  planName: {
    fontSize: FONTS.sizes.md,
    fontWeight: '800',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 4,
  },
  proLabel: {
    backgroundColor: '#FFD700',
    borderRadius: RADIUS.full,
    paddingVertical: 3,
    alignItems: 'center',
    marginBottom: 4,
  },
  proLabelText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '900',
    color: '#000',
  },
  planPrice: {
    fontSize: FONTS.sizes.md,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginBottom: 6,
  },
  featureIcon: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '800',
    width: 16,
  },
  featureText: {
    flex: 1,
    fontSize: 11,
    color: COLORS.textSecondary,
    lineHeight: 16,
  },
  testimonialCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
    gap: SPACING.sm,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary + '33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '800',
    color: COLORS.primary,
  },
  testimonialMeta: { flex: 1 },
  testimonialName: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  testimonialRole: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textMuted,
  },
  stars: { fontSize: 12 },
  testimonialText: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    lineHeight: 19,
    fontStyle: 'italic',
  },
  bottomCta: {
    backgroundColor: '#1A1A2E',
    borderRadius: RADIUS.xl,
    borderWidth: 2,
    borderColor: '#FFD700',
    padding: SPACING.xxl,
    alignItems: 'center',
    marginTop: SPACING.xl,
    marginBottom: SPACING.xl,
    gap: SPACING.sm,
  },
  bottomCtaTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '900',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  bottomCtaSub: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
  },
  bottomCtaBtn: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '900',
    color: '#FFD700',
    marginTop: SPACING.sm,
  },
  legalNote: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  legalText: {
    fontSize: 10,
    color: COLORS.textMuted,
    lineHeight: 15,
    textAlign: 'center',
  },
});
