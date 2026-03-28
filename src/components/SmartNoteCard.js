import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '../utils/theme';
import { NOTE_COLORS } from '../data/notes';

export default function SmartNoteCard({ note, onPress, onDelete }) {
  const colorConfig = NOTE_COLORS[note.color] || NOTE_COLORS.white;

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: colorConfig.border, backgroundColor: colorConfig.bg }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: colorConfig.border }]}>
          <Text style={styles.badgeEmoji}>{colorConfig.emoji}</Text>
          <Text style={styles.badgeLabel}>{colorConfig.label}</Text>
        </View>
        {onDelete && (
          <TouchableOpacity onPress={onDelete} style={styles.deleteBtn} hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}>
            <Text style={[styles.deleteText, { color: colorConfig.text }]}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {note.title ? (
        <Text style={[styles.title, { color: colorConfig.text }]} numberOfLines={2}>
          {note.title}
        </Text>
      ) : null}

      <Text style={[styles.content, { color: colorConfig.text }]} numberOfLines={4}>
        {note.content}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderLeftWidth: 4,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    gap: 4,
  },
  badgeEmoji: {
    fontSize: 11,
  },
  badgeLabel: {
    fontSize: FONTS.sizes.xs,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  deleteBtn: {
    padding: 2,
  },
  deleteText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
  },
  title: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    marginBottom: SPACING.xs,
    lineHeight: 20,
  },
  content: {
    fontSize: FONTS.sizes.sm,
    lineHeight: 19,
    opacity: 0.85,
  },
});
