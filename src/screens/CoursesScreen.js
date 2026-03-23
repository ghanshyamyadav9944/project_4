import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '../utils/theme';
import { COURSES } from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function CoursesScreen({ navigation }) {
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <>
            <Text style={styles.heading}>Learning Path</Text>
            <Text style={styles.subheading}>
              10 chapters from beginner to advanced — your complete trading education.
            </Text>

            {/* Level Legend */}
            <View style={styles.legendRow}>
              {levels.map((lvl) => {
                const count = COURSES.filter((c) => c.level === lvl).length;
                const color = lvl === 'Beginner' ? '#4CAF50' : lvl === 'Intermediate' ? '#FF9800' : '#9C27B0';
                return (
                  <View key={lvl} style={[styles.legendItem, { borderColor: color + '55' }]}>
                    <View style={[styles.legendDot, { backgroundColor: color }]} />
                    <Text style={styles.legendText}>{lvl} ({count})</Text>
                  </View>
                );
              })}
            </View>
          </>
        }
        renderItem={({ item }) => (
          <CourseCard
            course={item}
            onPress={() => navigation.navigate('ChapterDetail', { course: item })}
          />
        )}
        ListFooterComponent={<View style={{ height: SPACING.xxxl }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.xl,
  },
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
    marginBottom: SPACING.xl,
  },
  legendRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.xl,
    flexWrap: 'wrap',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RADIUS.full,
    borderWidth: 1,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    gap: 6,
    backgroundColor: COLORS.card,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
});
