import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BookDetailModal from '../../components/BookDetailModal'
import { Ionicons } from '@expo/vector-icons';

// Datos de libros integrados directamente
const librosData = [
  {
    id: 1,
    nombre: "Breves respuestas a las grandes preguntas",
    autor: "Stephen Hawking",
    categoría: "ciencia",
    idioma_original: "inglés",
    año_publicación: 2018,
    imagen_portada: "../assets/images/portadas/breves-respuestas-a-las-grandes-preguntas.png"
  },
  {
    id: 2,
    nombre: "El gen: Una historia íntima",
    autor: "Siddhartha Mukherjee",
    categoría: "ciencia",
    idioma_original: "inglés",
    año_publicación: 2016,
    imagen_portada: "../assets/images/portadas/el-gen-una-historia-intima.png"
  },
  {
    id: 3,
    nombre: "Una breve historia del tiempo",
    autor: "Stephen Hawking",
    categoría: "ciencia",
    idioma_original: "inglés",
    año_publicación: 1988,
    imagen_portada: "../assets/images/portadas/una-breve-historia-del-tiempo.png"
  },
  {
    id: 4,
    nombre: "El origen de las especies",
    autor: "Charles Darwin",
    categoría: "ciencia",
    idioma_original: "inglés",
    año_publicación: 1859,
    imagen_portada: "../assets/images/portadas/el-origen-de-las-especies.png"
  },
  {
    id: 5,
    nombre: "Cosmos",
    autor: "Carl Sagan",
    categoría: "ciencia",
    idioma_original: "inglés",
    año_publicación: 1980,
    imagen_portada: "../assets/images/portadas/cosmos.png"
  },
  {
    id: 6,
    nombre: "Clean Code",
    autor: "Robert C. Martin",
    categoría: "tecnología",
    idioma_original: "inglés",
    año_publicación: 2008,
    imagen_portada: "../assets/images/portadas/clean-code.png"
  },
  {
    id: 7,
    nombre: "You Don't Know JS",
    autor: "Kyle Simpson",
    categoría: "tecnología",
    idioma_original: "inglés",
    año_publicación: 2015,
    imagen_portada: "../assets/images/portadas/you-dont-know-js.png"
  },
  {
    id: 8,
    nombre: "Introduction to the Theory of Computation",
    autor: "Michael Sipser",
    categoría: "tecnología",
    idioma_original: "inglés",
    año_publicación: 1997,
    imagen_portada: "../assets/images/portadas/introduction-to-the-theory-of-computation.png"
  },
  {
    id: 9,
    nombre: "Structure and Interpretation of Computer Programs",
    autor: "Harold Abelson y Gerald Jay Sussman",
    categoría: "tecnología",
    idioma_original: "inglés",
    año_publicación: 1985,
    imagen_portada: "../assets/images/portadas/structure-and-interpretation-of-computer-programs.png"
  },
  {
    id: 10,
    nombre: "The Pragmatic Programmer",
    autor: "Andrew Hunt y David Thomas",
    categoría: "tecnología",
    idioma_original: "inglés",
    año_publicación: 1999,
    imagen_portada: "../assets/images/portadas/the-pragmatic-programmer.png"
  },
  {
    id: 11,
    nombre: "Sapiens: De animales a dioses",
    autor: "Yuval Noah Harari",
    categoría: "historia",
    idioma_original: "hebreo",
    año_publicación: 2011,
    imagen_portada: "../assets/images/portadas/sapiens-de-animales-a-dioses.png"
  },
  {
    id: 12,
    nombre: "Guns, Germs, and Steel",
    autor: "Jared Diamond",
    categoría: "historia",
    idioma_original: "inglés",
    año_publicación: 1997,
    imagen_portada: "../assets/images/portadas/guns-germs-and-steel.png"
  },
  {
    id: 13,
    nombre: "Postguerra: Una historia de Europa desde 1945",
    autor: "Tony Judt",
    categoría: "historia",
    idioma_original: "inglés",
    año_publicación: 2005,
    imagen_portada: "../assets/images/portadas/postguerra-una-historia-de-europa-desde-1945.png"
  },
  {
    id: 14,
    nombre: "La historia del siglo XX",
    autor: "Eric Hobsbawm",
    categoría: "historia",
    idioma_original: "inglés",
    año_publicación: 1994,
    imagen_portada: "../assets/images/portadas/la-historia-del-siglo-xx.png"
  },
  {
    id: 15,
    nombre: "La Segunda Guerra Mundial",
    autor: "Antony Beevor",
    categoría: "historia",
    idioma_original: "inglés",
    año_publicación: 2012,
    imagen_portada: "../assets/images/portadas/la-segunda-guerra-mundial.png"
  }
];

interface Libro {
  id: number;
  nombre: string;
  autor: string;
  categoría: string;
  idioma_original: string;
  año_publicación: number;
  imagen_portada: string;
}

export default function Home() {
  // Estado para el modal
  const [selectedBook, setSelectedBook] = useState<Libro | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Función para abrir el modal con un libro específico
  const openBookDetail = (libro: Libro) => {
    setSelectedBook(libro);
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedBook(null);
  };

  // Obtener libro destacado (primer libro)
  const libroDestacado = librosData[0];
  
  // Obtener libros por categoría
  const getLibrosPorCategoria = (categoria: string) => {
    return librosData.filter(libro => libro.categoría === categoria);
  };

  const librosTecnologia = getLibrosPorCategoria('tecnología');
  const librosCiencia = getLibrosPorCategoria('ciencia');
  const librosHistoria = getLibrosPorCategoria('historia');

  const renderLibroCard = (libro: Libro) => {
    let imagenSource;
    
    // Mapeo directo de rutas de imágenes
    switch(libro.id) {
      case 1:
        imagenSource = require('../../assets/images/portadas/breves-respuestas-a-las-grandes-preguntas.png');
        break;
      case 2:
        imagenSource = require('../../assets/images/portadas/el-gen-una-historia-intima.png');
        break;
      case 3:
        imagenSource = require('../../assets/images/portadas/una-breve-historia-del-tiempo.png');
        break;
      case 4:
        imagenSource = require('../../assets/images/portadas/el-origen-de-las-especies.png');
        break;
      case 5:
        imagenSource = require('../../assets/images/portadas/cosmos.png');
        break;
      case 6:
        imagenSource = require('../../assets/images/portadas/clean-code.png');
        break;
      case 7:
        imagenSource = require('../../assets/images/portadas/you-dont-know-js.png');
        break;
      case 8:
        imagenSource = require('../../assets/images/portadas/introduction-to-the-theory-of-computation.png');
        break;
      case 9:
        imagenSource = require('../../assets/images/portadas/structure-and-interpretation-of-computer-programs.png');
        break;
      case 10:
        imagenSource = require('../../assets/images/portadas/the-pragmatic-programmer.png');
        break;
      case 11:
        imagenSource = require('../../assets/images/portadas/sapiens-de-animales-a-dioses.png');
        break;
      case 12:
        imagenSource = require('../../assets/images/portadas/guns-germs-and-steel.png');
        break;
      case 13:
        imagenSource = require('../../assets/images/portadas/postguerra-una-historia-de-europa-desde-1945.png');
        break;
      case 14:
        imagenSource = require('../../assets/images/portadas/la-historia-del-siglo-xx.png');
        break;
      case 15:
        imagenSource = require('../../assets/images/portadas/la-segunda-guerra-mundial.png');
        break;
      default:
        imagenSource = null;
    }

    return (
      <TouchableOpacity 
        key={libro.id} 
        style={styles.bookCard}
        onPress={() => openBookDetail(libro)}
      >
        <View style={styles.bookImageContainer}>
          {imagenSource ? (
            <Image 
              source={imagenSource}
              style={styles.bookImage}
              resizeMode="cover"
            />
          ) : (
            <Text style={styles.bookImagePlaceholder}>📚</Text>
          )}
        </View>
        <Text style={styles.bookTitle} numberOfLines={2}>{libro.nombre}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} style={{color:'#f9e8c9'}}  />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Home</Text>
        </View>

        {/* Libro destacado del día */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Nuestro libro del día</Text>
          <TouchableOpacity 
            style={styles.featuredBook}
            onPress={() => openBookDetail(libroDestacado)}
          >
            <View style={styles.featuredImageContainer}>
              <Image 
                source={require('../../assets/images/portadas/breves-respuestas-a-las-grandes-preguntas.png')}
                style={styles.featuredImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredTitle}>{libroDestacado.nombre}</Text>
              <Text style={styles.featuredAuthor}>{libroDestacado.autor}</Text>
              <Text style={styles.featuredDescription}>
                Una fascinante exploración de las preguntas más fundamentales del universo, 
                presentada de manera accesible por uno de los físicos más brillantes de nuestro tiempo.
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Sección Tecnología */}
        <View style={styles.categorySection}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Tecnología ›</Text>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {librosTecnologia.map(renderLibroCard)}
          </ScrollView>
        </View>

        {/* Sección Ciencia */}
        <View style={styles.categorySection}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Ciencia ›</Text>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {librosCiencia.map(renderLibroCard)}
          </ScrollView>
        </View>

        {/* Sección Historia */}
        <View style={styles.categorySection}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Historia ›</Text>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {librosHistoria.map(renderLibroCard)}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Modal de detalles del libro */}
      <BookDetailModal 
        libro={selectedBook}
        visible={modalVisible}
        onClose={closeModal}
      />
    </View>
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
  backButton: {
    marginRight: 15,
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    color: '#f9e8c9',
  },
  featuredSection: {
    backgroundColor: '#98abee',
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#201658',
    marginBottom: 12,
  },
  featuredBook: {
    flexDirection: 'row',
    backgroundColor: '#f9e8c9',
    borderRadius: 8,
    padding: 12,
    alignItems: 'flex-start',
  },
  featuredImageContainer: {
    width: 80,
    height: 150,
    backgroundColor: '#dda853',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredImagePlaceholder: {
    fontSize: 30,
  },
  featuredInfo: {
    flex: 1,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#201658',
    marginBottom: 4,
  },
  featuredAuthor: {
    fontSize: 14,
    color: '#1d24ca',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 12,
    color: '#201658',
    lineHeight: 16,
  },
  categorySection: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#201658',
  },
  horizontalScroll: {
    paddingLeft: 4,
  },
  bookCard: {
    width: 120,
    marginRight: 12,
  },
  bookImageContainer: {
    width: 120,
    height: 160,
    backgroundColor: '#98abee',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#dda853',
    overflow: 'hidden',
  },
  bookImage: {
    width: '100%',
    height: '100%',
  },
  bookImagePlaceholder: {
    fontSize: 40,
  },
  bookTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#201658',
    textAlign: 'center',
    lineHeight: 16,
  },
});

// No se necesita código adicional - el archivo está completo