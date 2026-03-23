import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '../utils/theme';
import { NOTE_COLORS, SAMPLE_NOTES, COLOR_OPTIONS } from '../data/notes';
import SmartNoteCard from '../components/SmartNoteCard';

let noteIdCounter = 1000;

export default function SmartNotebookScreen({ route }) {
  const chapter = route?.params?.chapter || null;

  const initialNotes = chapter && SAMPLE_NOTES[chapter.id]
    ? [...SAMPLE_NOTES[chapter.id]]
    : Object.values(SAMPLE_NOTES).flat().slice(0, 4);

  const [notes, setNotes] = useState(initialNotes);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState({ color: 'blue', title: '', content: '' });
  const [filterColor, setFilterColor] = useState(null);

  const filteredNotes = filterColor
    ? notes.filter((n) => n.color === filterColor)
    : notes;

  const addNote = () => {
    if (!newNote.content.trim()) {
      Alert.alert('Empty Note', 'Please write something in your note.');
      return;
    }
    const note = {
      id: `note-${++noteIdCounter}`,
      color: newNote.color,
      title: newNote.title.trim(),
      content: newNote.content.trim(),
    };
    setNotes([note, ...notes]);
    setNewNote({ color: 'blue', title: '', content: '' });
    setModalVisible(false);
  };

  const deleteNote = (id) => {
    Alert.alert('Delete Note', 'Remove this note?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => setNotes(notes.filter((n) => n.id !== id)) },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>
              {chapter ? `📓 ${chapter.title}` : '📓 Smart Notebook'}
            </Text>
            <Text style={styles.subtitle}>
              {chapter ? 'Chapter notes & key takeaways' : 'All your trading notes in one place'}
            </Text>
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
            <Text style={styles.addBtnText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {/* Color Filter */}
        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>Filter by type:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
            <TouchableOpacity
              style={[styles.filterChip, !filterColor && styles.filterChipActive]}
              onPress={() => setFilterColor(null)}
            >
              <Text style={[styles.filterChipText, !filterColor && { color: COLORS.primary }]}>All</Text>
            </TouchableOpacity>
            {COLOR_OPTIONS.map((colorOpt) => (
              <TouchableOpacity
                key={colorOpt.key}
                style={[
                  styles.filterChip,
                  { borderColor: colorOpt.border },
                  filterColor === colorOpt.key && { backgroundColor: colorOpt.bg },
                ]}
                onPress={() => setFilterColor(filterColor === colorOpt.key ? null : colorOpt.key)}
              >
                <Text style={styles.filterChipEmoji}>{colorOpt.emoji}</Text>
                <Text style={[styles.filterChipText, { color: colorOpt.text }]}>{colorOpt.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Color Legend */}
        <View style={styles.legendContainer}>
          <Text style={styles.legendTitle}>Note Color Guide:</Text>
          <View style={styles.legendGrid}>
            {COLOR_OPTIONS.map((c) => (
              <View key={c.key} style={[styles.legendItem, { backgroundColor: c.bg, borderColor: c.border }]}>
                <Text style={styles.legendEmoji}>{c.emoji}</Text>
                <Text style={[styles.legendItemText, { color: c.text }]}>{c.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Notes */}
        {filteredNotes.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyTitle}>No notes yet</Text>
            <Text style={styles.emptyText}>Tap "+ Add" to create your first note</Text>
          </View>
        ) : (
          filteredNotes.map((note) => (
            <SmartNoteCard
              key={note.id}
              note={note}
              onDelete={() => deleteNote(note.id)}
            />
          ))
        )}
        <View style={{ height: SPACING.xxxl }} />
      </ScrollView>

      {/* Add Note Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>New Note</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Color Picker */}
            <Text style={styles.modalLabel}>Note Color / Category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.colorPickerScroll}>
              <View style={styles.colorPickerRow}>
                {COLOR_OPTIONS.map((c) => (
                  <TouchableOpacity
                    key={c.key}
                    style={[
                      styles.colorChip,
                      { backgroundColor: c.bg, borderColor: c.border },
                      newNote.color === c.key && styles.colorChipSelected,
                    ]}
                    onPress={() => setNewNote({ ...newNote, color: c.key })}
                  >
                    <Text style={styles.colorChipEmoji}>{c.emoji}</Text>
                    <Text style={[styles.colorChipLabel, { color: c.text }]}>{c.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <Text style={styles.modalLabel}>Title (optional)</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Note title..."
              placeholderTextColor={COLORS.textMuted}
              value={newNote.title}
              onChangeText={(v) => setNewNote({ ...newNote, title: v })}
            />

            <Text style={styles.modalLabel}>Content *</Text>
            <TextInput
              style={[styles.modalInput, styles.modalTextArea]}
              placeholder="Write your note here..."
              placeholderTextColor={COLORS.textMuted}
              value={newNote.content}
              onChangeText={(v) => setNewNote({ ...newNote, content: v })}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />

            <TouchableOpacity style={styles.saveBtn} onPress={addNote}>
              <Text style={styles.saveBtnText}>💾 Save Note</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.xl },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.xl,
  },
  headerLeft: { flex: 1, marginRight: SPACING.md },
  title: {
    fontSize: FONTS.sizes.xl,
    fontWeight: '800',
    color: COLORS.textPrimary,
    lineHeight: 26,
  },
  subtitle: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  addBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  addBtnText: {
    fontSize: FONTS.sizes.sm,
    color: '#000',
    fontWeight: '800',
  },
  filterSection: { marginBottom: SPACING.lg },
  filterLabel: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textMuted,
    fontWeight: '600',
    marginBottom: SPACING.sm,
  },
  filterScroll: { gap: SPACING.sm, paddingRight: SPACING.xl },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 5,
    backgroundColor: COLORS.card,
    gap: 4,
    marginRight: SPACING.sm,
  },
  filterChipActive: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary + '18',
  },
  filterChipEmoji: { fontSize: 12 },
  filterChipText: {
    fontSize: FONTS.sizes.xs,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  legendContainer: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  legendTitle: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  legendGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    gap: 4,
  },
  legendEmoji: { fontSize: 12 },
  legendItemText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: SPACING.xxxl * 2,
  },
  emptyIcon: { fontSize: 48, marginBottom: SPACING.md },
  emptyTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '700',
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  emptyText: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textMuted,
  },
  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
    padding: SPACING.xl,
    maxHeight: '85%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  modalTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: '800',
    color: COLORS.textPrimary,
  },
  modalClose: {
    fontSize: FONTS.sizes.xl,
    color: COLORS.textMuted,
    fontWeight: '700',
  },
  modalLabel: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textSecondary,
    fontWeight: '600',
    marginBottom: SPACING.sm,
    marginTop: SPACING.md,
  },
  colorPickerScroll: { marginBottom: SPACING.sm },
  colorPickerRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    paddingRight: SPACING.xl,
  },
  colorChip: {
    alignItems: 'center',
    borderRadius: RADIUS.md,
    borderWidth: 1.5,
    padding: SPACING.sm,
    minWidth: 80,
    gap: 4,
  },
  colorChipSelected: {
    borderWidth: 3,
  },
  colorChipEmoji: { fontSize: 20 },
  colorChipLabel: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  modalInput: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    fontSize: FONTS.sizes.md,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  modalTextArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  saveBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  saveBtnText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '800',
    color: '#000',
  },
});
