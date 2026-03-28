import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '../utils/theme';

export default function ChapterDetailScreen({ route, navigation }) {
  const { course } = route.params;
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggle = (i) => setExpandedIndex(expandedIndex === i ? -1 : i);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Chapter Hero */}
        <View style={[styles.hero, { borderColor: course.levelColor + '55' }]}>
          <Text style={styles.heroIcon}>{course.icon}</Text>
          <View style={[styles.levelBadge, { backgroundColor: course.levelColor + '22', borderColor: course.levelColor }]}>
            <Text style={[styles.levelText, { color: course.levelColor }]}>{course.level}</Text>
          </View>
          <Text style={styles.heroTitle}>{course.title}</Text>
          <Text style={styles.heroSub}>{course.subtitle}</Text>
          <View style={styles.heroMeta}>
            <Text style={styles.metaItem}>⏱ {course.duration}</Text>
            <Text style={styles.metaDivider}>·</Text>
            <Text style={styles.metaItem}>📚 {course.lessons} lessons</Text>
          </View>
        </View>

        {/* Lesson Accordions */}
        <Text style={styles.sectionTitle}>Lessons</Text>
        {course.content.map((lesson, i) => (
          <View key={i} style={styles.lessonCard}>
            <TouchableOpacity
              style={styles.lessonHeader}
              onPress={() => toggle(i)}
              activeOpacity={0.8}
            >
              <View style={[styles.lessonNum, { backgroundColor: course.levelColor + '22' }]}>
                <Text style={[styles.lessonNumText, { color: course.levelColor }]}>{i + 1}</Text>
              </View>
              <Text style={styles.lessonTitle} numberOfLines={2}>{lesson.heading}</Text>
              <Text style={[styles.chevron, { color: course.levelColor }]}>
                {expandedIndex === i ? '▾' : '›'}
              </Text>
            </TouchableOpacity>

            {expandedIndex === i && (
              <View style={styles.lessonBody}>
                <Text style={styles.lessonText}>{lesson.body}</Text>
              </View>
            )}
          </View>
        ))}

        {/* Smart Notes CTA */}
        <TouchableOpacity
          style={[styles.notesCta, { borderColor: course.levelColor }]}
          onPress={() => navigation.navigate('Notebook', { chapter: course })}
          activeOpacity={0.85}
        >
          <Text style={styles.notesCtaIcon}>📓</Text>
          <View style={styles.notesCtaContent}>
            <Text style={styles.notesCtaTitle}>Open Smart Notebook</Text>
            <Text style={styles.notesCtaSub}>Add notes, highlights & key takeaways for this chapter</Text>
          </View>
          <Text style={[styles.notesCtaArrow, { color: course.levelColor }]}>→</Text>
        </TouchableOpacity>

        <View style={{ height: SPACING.xxxl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.xl },
  hero: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.xl,
    padding: SPACING.xxl,
    alignItems: 'center',
    borderWidth: 1.5,
    marginBottom: SPACING.xxl,
  },
  heroIcon: {
    fontSize: 48,
    marginBottom: SPACING.md,
  },
  levelBadge: {
    borderRadius: RADIUS.full,
    borderWidth: 1,
    paddingHorizontal: SPACING.md,
    paddingVertical: 4,
    marginBottom: SPACING.md,
  },
  levelText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '800',
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: '900',
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: SPACING.sm,
  },
  heroSub: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  heroMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  metaItem: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textMuted,
  },
  metaDivider: {
    color: COLORS.textMuted,
  },
  sectionTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  lessonCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  lessonNum: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  lessonNumText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '800',
  },
  lessonTitle: {
    flex: 1,
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  chevron: {
    fontSize: 20,
    fontWeight: '700',
  },
  lessonBody: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  lessonText: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    lineHeight: 21,
    paddingTop: SPACING.md,
  },
  notesCta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 1.5,
    marginTop: SPACING.xl,
    gap: SPACING.md,
  },
  notesCtaIcon: {
    fontSize: 28,
  },
  notesCtaContent: { flex: 1 },
  notesCtaTitle: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  notesCtaSub: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textSecondary,
    marginTop: 2,
    lineHeight: 16,
  },
  notesCtaArrow: {
    fontSize: 22,
    fontWeight: '700',
  },
});
