import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Reseña() {
  const [bookTitle, setBookTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Selected option');
  const [reviewText, setReviewText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    'Tecnología',
    'Ciencia',
    'Historia',
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} style={{color:'#f9e8c9'}}/>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reseña</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Book Title Input */}
          <Text style={styles.label}>Escribe el nombre del libro:</Text>
          <TextInput
            style={styles.textInput}
            value={bookTitle}
            onChangeText={setBookTitle}
            placeholder="Título del libro"
            placeholderTextColor={styles.secondaryText.color}
          />

          {/* Category Dropdown */}
          <Text style={styles.label}>Categoría:</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.dropdownText}>{selectedCategory}</Text>
            <Ionicons
              name={showDropdown ? "chevron-up" : "chevron-down"}
              size={20}
              color={styles.primaryText.color}
            />
          </TouchableOpacity>

          {showDropdown && (
            <View style={styles.dropdownOptions}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownOption}
                  onPress={() => handleCategorySelect(category)}
                >
                  <Text style={styles.dropdownOptionText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Review Text Area */}
          <Text style={styles.label}>Deja tu reseña del libro:</Text>
          <TextInput
            style={styles.textArea}
            value={reviewText}
            onChangeText={setReviewText}
            placeholder="Escribe tu reseña aquí..."
            placeholderTextColor={styles.secondaryText.color}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Publicar Reseña</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9e8c9',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#201658',
    borderBottomWidth: 1,
    borderBottomColor: '#dda853',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f9e8c9',
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#201658',
    marginBottom: 8,
    marginTop: 15,
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#98abee',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#201658',
  },
  dropdown: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#98abee',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#201658',
  },
  dropdownOptions: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#98abee',
    borderTopWidth: 0,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    maxHeight: 200,
  },
  dropdownOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#98abee',
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#201658',
  },
  textArea: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#98abee',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#201658',
    height: 120,
  },
  submitButton: {
    backgroundColor: '#1d24ca',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#201658',
  },
  secondaryText: {
    color: '#98abee',
  },
});