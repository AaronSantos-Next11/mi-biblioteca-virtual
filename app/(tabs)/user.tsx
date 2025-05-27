import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from "expo-router";

interface UserData {
  fullName: string;
  username: string;
  email: string;
  phone: string;
}

export default function User() {

  const params = useLocalSearchParams();
  const router = useRouter();
  
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    fullName: 'Juan Pérez García',
    username: 'juanperez123',
    email: 'juan.perez@email.com',
    phone: '+52 55 1234 5678',
  });

  const [editedData, setEditedData] = useState<UserData>(userData);

  // Actualizar los datos del usuario cuando se reciben parámetros
  useEffect(() => {
    if (params.fullName || params.username || params.email || params.phone) {
      const newUserData: UserData = {
        fullName: (params.fullName as string) || userData.fullName,
        username: (params.username as string) || userData.username,
        email: (params.email as string) || userData.email,
        phone: (params.phone as string) || userData.phone,
      };
      setUserData(newUserData);
      setEditedData(newUserData);
    }
  }, [params]);

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      setUserData(editedData);
      Alert.alert('Éxito', 'Datos actualizados correctamente');
    } else {
      // Start editing
      setEditedData(userData);
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditedData(userData);
    setIsEditing(false);
  };

  const UserField = ({ 
    label, 
    value, 
    editable = true, 
    keyboardType = 'default' as any,
    onChangeText 
  }: {
    label: string;
    value: string;
    editable?: boolean;
    keyboardType?: 'default' | 'email-address' | 'phone-pad';
    onChangeText: (text: string) => void;
  }) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {isEditing && editable ? (
        <TextInput
          style={styles.editableField}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      ) : (
        <View style={styles.fieldValue}>
          <Text style={styles.fieldText}>{value}</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} style={{color:'#f9e8c9'}} onPress={() => router.push('/home')} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil</Text>
          <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
            <Ionicons 
              name={isEditing ? "checkmark" : "pencil"} 
              size={24} 
              style={{color:'#f9e8c9'}} 
            />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Profile Picture */}
          <View style={styles.profileSection}>
            <View style={styles.profilePicture}>
              <Ionicons name="person" size={60} color="#98abee" />
            </View>
            <TouchableOpacity style={styles.changePhotoButton}>
              <Text style={styles.changePhotoText}>Cambiar foto</Text>
            </TouchableOpacity>
          </View>

          {/* User Information Fields */}
          <View style={styles.fieldsContainer}>
            <UserField
              label="Nombre completo"
              value={editedData.fullName}
              onChangeText={(text) => setEditedData({...editedData, fullName: text})}
            />

            <UserField
              label="Nombre de usuario"
              value={editedData.username}
              onChangeText={(text) => setEditedData({...editedData, username: text})}
            />

            <UserField
              label="Correo electrónico"
              value={editedData.email}
              keyboardType="email-address"
              onChangeText={(text) => setEditedData({...editedData, email: text})}
            />

            <UserField
              label="Número de teléfono"
              value={editedData.phone}
              keyboardType="phone-pad"
              onChangeText={(text) => setEditedData({...editedData, phone: text})}
            />
          </View>

          {/* Action Buttons */}
          {isEditing && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleEdit}>
                <Text style={styles.saveButtonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Additional Options */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionItem}>
              <Ionicons name="shield-checkmark" size={24} color="#1d24ca" />
              <Text style={styles.optionText}>Privacidad y seguridad</Text>
              <Ionicons name="chevron-forward" size={20} color="#98abee" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem}>
              <Ionicons name="notifications" size={24} color="#1d24ca" />
              <Text style={styles.optionText}>Notificaciones</Text>
              <Ionicons name="chevron-forward" size={20} color="#98abee" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem}>
              <Ionicons name="help-circle" size={24} color="#1d24ca" />
              <Text style={styles.optionText}>Ayuda</Text>
              <Ionicons name="chevron-forward" size={20} color="#98abee" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutItem}>
              <Ionicons name="log-out" size={24} color="#ff4444" />
              <Text style={styles.logoutText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
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
    justifyContent: 'space-between',
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
    flex: 1,
  },
  editButton: {
    padding: 5,
  },
  content: {
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#98abee',
    marginBottom: 15,
  },
  changePhotoButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#1d24ca',
    borderRadius: 20,
  },
  changePhotoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  fieldsContainer: {
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#201658',
    marginBottom: 8,
  },
  fieldValue: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#98abee',
    borderRadius: 8,
    padding: 15,
  },
  fieldText: {
    fontSize: 16,
    color: '#201658',
  },
  editableField: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#1d24ca',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#201658',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#dda853',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#1d24ca',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginLeft: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#201658',
    marginLeft: 15,
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  logoutText: {
    fontSize: 16,
    color: '#ff4444',
    marginLeft: 15,
    fontWeight: '600',
  },
  primaryText: {
    color: '#201658',
  },
});