import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

interface TrainingDay {
  day: string;
  label: string;
  unlocked: boolean;
}

const trainingDays = [
  { day: 'Day 1', label: 'Chest', unlocked: true },
  { day: 'Day 2', label: 'Back', unlocked: false },
  { day: 'Day 3', label: 'Lower body', unlocked: false },
  { day: 'Rest Day', label: '', unlocked: false },
  { day: 'Day 5', label: 'Shoulders', unlocked: false },
];

export default function HomeScreen() {

    const renderItem = ({ item }: { item: TrainingDay }) => (
    <View style={[styles.card, item.unlocked && styles.cardUnlocked]}>
      <View>
        <Text style={styles.dayText}>{item.day}</Text>
        {!!item.label && <Text style={styles.labelText}>{item.label}</Text>}
      </View>

      {item.unlocked ? (
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      ) : (
        <Icon name="lock" size={22} color="#999" />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MUSCLE BUILDING</Text>
      <Text style={styles.subtitle}>30 Days</Text>

      <FlatList
        data={trainingDays}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardUnlocked: {
    backgroundColor: '#3E4EDA',
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  labelText: {
    fontSize: 14,
    color: '#555',
  },
  startButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  startText: {
    color: '#3E4EDA',
    fontWeight: 'bold',
  },
});