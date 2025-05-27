import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Libro {
  id: number;
  nombre: string;
  autor: string;
  categoría: string;
  idioma_original: string;
  año_publicación: number;
  imagen_portada: string;
}

interface BookDetailModalProps {
  libro: Libro | null;
  visible: boolean;
  onClose: () => void;
}

const { width, height } = Dimensions.get("window");

export default function BookDetailModal({
  libro,
  visible,
  onClose,
}: BookDetailModalProps) {
  if (!libro) return null;

  // Función para obtener la imagen según el ID del libro
  const getImageSource = (id: number) => {
    switch (id) {
      case 1:
        return require("../assets/images/portadas/breves-respuestas-a-las-grandes-preguntas.png");
      case 2:
        return require("../assets/images/portadas/el-gen-una-historia-intima.png");
      case 3:
        return require("../assets/images/portadas/una-breve-historia-del-tiempo.png");
      case 4:
        return require("../assets/images/portadas/el-origen-de-las-especies.png");
      case 5:
        return require("../assets/images/portadas/cosmos.png");
      case 6:
        return require("../assets/images/portadas/clean-code.png");
      case 7:
        return require("../assets/images/portadas/you-dont-know-js.png");
      case 8:
        return require("../assets/images/portadas/introduction-to-the-theory-of-computation.png");
      case 9:
        return require("../assets/images/portadas/structure-and-interpretation-of-computer-programs.png");
      case 10:
        return require("../assets/images/portadas/the-pragmatic-programmer.png");
      case 11:
        return require("../assets/images/portadas/sapiens-de-animales-a-dioses.png");
      case 12:
        return require("../assets/images/portadas/guns-germs-and-steel.png");
      case 13:
        return require("../assets/images/portadas/postguerra-una-historia-de-europa-desde-1945.png");
      case 14:
        return require("../assets/images/portadas/la-historia-del-siglo-xx.png");
      case 15:
        return require("../assets/images/portadas/la-segunda-guerra-mundial.png");
      default:
        return null;
    }
  };

  // Función para obtener descripción personalizada por libro
  const getBookDescription = (id: number) => {
    const descriptions = {
      1: "Una fascinante exploración de las preguntas más fundamentales del universo, presentada de manera accesible por uno de los físicos más brillantes de nuestro tiempo. Hawking aborda temas como la existencia de Dios, la posibilidad de viajar en el tiempo y el futuro de la humanidad.",
      2: "Una historia épica del gen, desde su descubrimiento hasta las implicaciones futuras de la ingeniería genética. Mukherjee combina ciencia rigurosa con narrativa cautivadora para explorar cómo los genes moldean nuestras vidas.",
      3: "El libro que hizo accesible la cosmología al público general. Hawking explica conceptos complejos como los agujeros negros, el Big Bang y la relatividad de manera comprensible y fascinante.",
      4: "La obra revolucionaria que cambió nuestra comprensión de la vida en la Tierra. Darwin presenta su teoría de la evolución por selección natural, fundamentando la biología moderna.",
      5: "Un viaje épico a través del cosmos que combina ciencia rigurosa con poesía. Sagan nos guía desde las partículas subatómicas hasta las galaxias más distantes, explorando nuestro lugar en el universo.",
      6: "La guía definitiva para escribir código limpio y mantenible. Martin presenta principios fundamentales y técnicas prácticas para crear software de calidad profesional.",
      7: "Una serie profunda que explora los aspectos más confusos y malentendidos de JavaScript. Simpson desmitifica el lenguaje y revela sus características más poderosas.",
      8: "Una introducción rigurosa a la teoría de la computación que abarca autómatas, computabilidad y complejidad. Esencial para entender los fundamentos teóricos de la informática.",
      9: "Un clásico de la programación que enseña a pensar como un científico de la computación. Utiliza Scheme para explorar conceptos fundamentales de la programación y la abstracción.",
      10: "Consejos prácticos y filosofía de desarrollo de dos programadores experimentados. Hunt y Thomas comparten técnicas para convertirse en un programador más efectivo y profesional.",
      11: "Una narrativa brillante de la historia humana desde cazadores-recolectores hasta la era moderna. Harari examina cómo Homo sapiens llegó a dominar el planeta.",
      12: "Una explicación innovadora de por qué algunas sociedades prosperaron mientras otras no. Diamond examina el papel de la geografía, la tecnología y los patógenos en el desarrollo humano.",
      13: "Una historia magistral de Europa desde el final de la Segunda Guerra Mundial. Judt analiza la reconstrucción, la Guerra Fría y la transformación del continente europeo.",
      14: "Un análisis penetrante del siglo XX como la 'Era de los Extremos'. Hobsbawm examina las revoluciones, guerras y transformaciones que definieron el siglo pasado.",
      15: "Una narrativa épica y accesible del conflicto más devastador de la historia humana. Beevor combina estrategia militar con historias humanas para crear un relato completo de la guerra.",
    };
    return (
      descriptions[id as keyof typeof descriptions] ||
      "Una obra fascinante que explora temas profundos y relevantes de su campo."
    );
  };

   const getCategoryColor = (categoria: string) => {
      switch (categoria.toLowerCase()) {
         case "ciencia":
         return "#98abee";
         case "tecnología":
         return "#1d24ca";
         case "historia":
         return "#dda853";
         default:
         return "#98abee";
      }
   };

  const imagenSource = getImageSource(libro.id);

   return (
      <Modal
         animationType="slide"
         transparent={true}
         visible={visible}
         onRequestClose={onClose}
      >
         <View style={styles.modalOverlay}>
         <View style={styles.modalContainer}>
            {/* Header del modal */}
            <View style={styles.modalHeader}>
               <TouchableOpacity onPress={onClose} style={styles.closeButton}>
               <FontAwesome name="times" size={24} color="#f9e8c9" />
               </TouchableOpacity>
            </View>

            <ScrollView
               style={styles.modalContent}
               showsVerticalScrollIndicator={false}
            >
               {/* Imagen del libro */}
               <View style={styles.imageContainer}>
               {imagenSource ? (
                  <Image
                     source={imagenSource}
                     style={styles.bookImage}
                     resizeMode="cover"
                  />
               ) : (
                  <View style={styles.imagePlaceholder}>
                     <Text style={styles.imagePlaceholderText}>📚</Text>
                  </View>
               )}
               </View>

               {/* Información del libro */}
               <View style={styles.bookInfo}>
               <Text style={styles.bookTitle}>{libro.nombre}</Text>
               <Text style={styles.bookAuthor}>por {libro.autor}</Text>

               <View style={styles.bookMeta}>
                  <View
                     style={[
                     styles.categoryBadge,
                     { backgroundColor: getCategoryColor(libro.categoría) },
                     ]}
                  >
                     <Text style={styles.categoryText}>
                     {libro.categoría.toUpperCase()}
                     </Text>
                  </View>
                  <Text style={styles.metaText}>
                     {libro.año_publicación} • {libro.idioma_original}
                  </Text>
               </View>

               <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionTitle}>Descripción</Text>
                  <Text style={styles.bookDescription}>
                     {getBookDescription(libro.id)}
                  </Text>
               </View>

               {/* Botones de acción */}
               <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.primaryButton}>
                     <FontAwesome
                     name="book"
                     size={18}
                     color="#f9e8c9"
                     style={styles.buttonIcon}
                     />
                     <Text style={styles.primaryButtonText}>Leer ahora</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.secondaryButton}>
                     <FontAwesome
                     name="heart-o"
                     size={18}
                     color="#201658"
                     style={styles.buttonIcon}
                     />
                     <Text style={styles.secondaryButtonText}>Favoritos</Text>
                  </TouchableOpacity>
               </View>
               </View>
            </ScrollView>
         </View>
         </View>
      </Modal>
   );
}

const styles = StyleSheet.create({
   modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(33, 31, 45, 0.46)",
      justifyContent: "flex-end",
   },
   modalContainer: {
      backgroundColor: "#f9e8c9",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      maxHeight: height * 0.9,
      minHeight: height * 0.7,
   },
   modalHeader: {
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingHorizontal: 20,
      paddingTop: 15,
      paddingBottom: 5,
      backgroundColor: "#201658",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
   },
   closeButton: {
      padding: 5,
   },
   modalContent: {
      flex: 1,
      paddingHorizontal: 20,
   },
   imageContainer: {
      alignItems: "center",
      marginVertical: 20,
   },
   bookImage: {
      width: width * 0.5,
      height: width * 0.7,
      borderRadius: 12,
      shadowColor: "#201658",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
   },
   imagePlaceholder: {
      width: width * 0.5,
      height: width * 0.7,
      backgroundColor: "#98abee",
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
   },
   imagePlaceholderText: {
      fontSize: 60,
   },
   bookInfo: {
      paddingBottom: 30,
   },
   bookTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#201658",
      textAlign: "center",
      marginBottom: 8,
      lineHeight: 30,
   },
   bookAuthor: {
      fontSize: 18,
      color: "#1d24ca",
      textAlign: "center",
      marginBottom: 20,
      fontStyle: "italic",
   },
   bookMeta: {
      alignItems: "center",
      marginBottom: 25,
   },
   categoryBadge: {
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 20,
      marginBottom: 10,
   },
   categoryText: {
      color: "#f9e8c9",
      fontSize: 12,
      fontWeight: "bold",
      letterSpacing: 1,
   },
   metaText: {
      fontSize: 14,
      color: "#201658",
      opacity: 0.7,
   },
   descriptionContainer: {
      marginBottom: 30,
   },
   descriptionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#201658",
      marginBottom: 12,
   },
   bookDescription: {
      fontSize: 16,
      color: "#201658",
      lineHeight: 24,
      textAlign: "justify",
   },
   actionButtons: {
      flexDirection: "row",
      gap: 12,
   },
   primaryButton: {
      flex: 1,
      backgroundColor: "#201658",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      borderRadius: 12,
   },
   secondaryButton: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: "#201658",
   },
   buttonIcon: {
      marginRight: 8,
   },
   primaryButtonText: {
      color: "#f9e8c9",
      fontSize: 16,
      fontWeight: "600",
   },
   secondaryButtonText: {
      color: "#201658",
      fontSize: 16,
      fontWeight: "600",
   },
   });
