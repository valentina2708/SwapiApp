import { ScrollView, View, StyleSheet } from "react-native";
import { Text, Icon, Divider, Card } from "react-native-paper";
import { useEffect, useState } from "react";
import Title from "../atoms/Title";
import { getNameByUrl } from "../../services/getNameByUrl";
import { useTheme } from "../../Context/ThemeContext";

type DetailProps = {
  item: any;
  type: "films" | "people" | "planets";
};

export default function Detail({ item, type }: DetailProps) {
  const { theme } = useTheme();
  const isDarkMode = theme.dark;

  const [planetName, setPlanetName] = useState("Cargando...");
  const [films, setFilms] = useState<string[]>([]);
  const [characters, setCharacters] = useState<string[]>([]);
  const [planets, setPlanets] = useState<string[]>([]);
  const [residents, setResidents] = useState<string[]>([]);

  const capitalizeFirstLetter = (text: string) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  

  if (!item)
    return (
      <Text style={[styles.loading, { color: theme.colors.text }]}>
        Cargando...
      </Text>
    );

  useEffect(() => {
    if (item.mundo_Natal) {
      getNameByUrl(item.mundo_Natal).then(setPlanetName);
    }

    if (item.peliculas?.length) {
      Promise.all(item.peliculas.map(getNameByUrl)).then(setFilms);
    }

    if (item.personajes?.length) {
      Promise.all(item.personajes.map(getNameByUrl)).then(setCharacters);
    }
    if (item.planetas?.length) {
      Promise.all(item.planetas.map(getNameByUrl)).then(setPlanets);
    }
    if (item.residentes?.length) {
      Promise.all(item.residentes.map(getNameByUrl)).then(setResidents);
    }
  }, [
    item.mundo_Natal,
    item.films,
    item.characters,
    item.planetas,
    item.residentes,
  ]);

  return (
    <ScrollView>
      <Card
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.background,
            borderColor: isDarkMode
              ? theme.colors.accent
              : theme.colors.primary,
            shadowColor: isDarkMode
              ? theme.colors.accent
              : theme.colors.secondary,
          },
        ]}
      >
        <Title variant="detalles" style={{ color: isDarkMode ? theme.colors.text : theme.colors.accent }}>
          {item.nombre}
        </Title>

        {type === "people" && (
          <>
            <DetailItem
              icon="account"
              label="Género"
              value={capitalizeFirstLetter(item.genero)}
              theme={theme}
            />
            <DetailItem
              icon="calendar"
              label="Nacimiento"
              value={item.año_nacimiento}
              theme={theme}
            />
            <DetailItem
              icon="human-male-height-variant"
              label="Altura"
              value={`${item.altura} cm`}
              theme={theme}
            />
            <DetailItem
              icon="eye"
              label="Color de ojos"
              value={capitalizeFirstLetter(item.color_ojos)}
              theme={theme}
            />
            <DetailItem
              icon="face-man-shimmer"
              label="Color de cabello"
              value={capitalizeFirstLetter(item.color_cabello)}
              theme={theme}
            />
            <DetailItem
              icon="format-color-fill"
              label="Color de piel"
              value={capitalizeFirstLetter(item.color_Piel)}
              theme={theme}
            />
            <DetailItem
              icon="weight"
              label="Masa"
              value={`${item.masa} Kg`}
              theme={theme}
            />
            <DetailItem
              icon="earth"
              label="Mundo Natal"
              value={planetName}
              theme={theme}
            />
            <Divider style={styles.divider} theme={theme} />
            <DetailItem
              icon="filmstrip"
              label="Películas"
              value={films.length ? films.join(", ") : "Cargando..."}
              theme={theme}
            />
          </>
        )}

        {type === "films" && (
          <>
            <DetailItem
              icon="filmstrip"
              label="Episodio"
              value={`#${item.episodio}`}
              theme={theme}
            />
            <DetailItem
              icon="account-multiple"
              label="Director"
              value={item.director}
              theme={theme}
            />
            <DetailItem
              icon="movie-roll"
              label="Productor"
              value={item.productor}
              theme={theme}
            />
            <DetailItem
              icon="calendar"
              label="Estreno"
              value={item.fecha_Estreno}
              theme={theme}
            />
            <Divider style={styles.divider} theme={theme} />
            <DetailItem
              icon="book"
              label="Sinopsis"
              value={item.sinopsis}
              theme={theme}
            />
            <Divider style={styles.divider} theme={theme} />
            <DetailItem
              icon="account-multiple"
              label="Personajes"
              value={characters.length ? characters.join(", ") : "Cargando..."}
              theme={theme}
            />
            <DetailItem
              icon="earth"
              label="Planetas"
              value={planets.length ? planets.join(", ") : "Cargando..."}
              theme={theme}
            />
          </>
        )}

        {type === "planets" && (
          <>
            <DetailItem
              icon="rotate-orbit"
              label="Periodo Rotacion"
              value={item.periodo_Rotacion}
              theme={theme}
            />
            <DetailItem
              icon="orbit-variant"
              label="Periodo Orbital"
              value={item.periodo_Orbital}
              theme={theme}
            />
            <DetailItem
              icon="diameter-outline"
              label="Diámetro"
              value={item.diametro}
              theme={theme}
            />
            <DetailItem
              icon="weather-cloudy"
              label="Clima"
              value={capitalizeFirstLetter(item.clima)}
              theme={theme}
            />
            <DetailItem
              icon="terrain"
              label="Terreno"
              value={capitalizeFirstLetter(item.terreno)}
              theme={theme}
            />
            <DetailItem
              icon="home-group"
              label="Población"
              value={item.poblacion}
              theme={theme}
            />
            <DetailItem
              icon="water"
              label="Aguas Superficiales"
              value={item.aguas_Superficiales}
              theme={theme}
            />
            <DetailItem
              icon="axis-arrow"
              label="Gravedad"
              value={item.gravedad}
              theme={theme}
            />
            <Divider style={styles.divider} theme={theme} />
            <DetailItem
              icon="filmstrip"
              label="Películas"
              value={films.length ? films.join(", ") : "Cargando..."}
              theme={theme}
            />
            <DetailItem
              icon="account-group"
              label="Residentes"
              value={residents.length ? residents.join(", ") : "Cargando..."}
              theme={theme}
            />
          </>
        )}
      </Card>
    </ScrollView>
  );
}

const DetailItem = ({
  icon,
  label,
  value,
  theme,
}: {
  icon: string;
  label: string;
  value: string;
  theme: any;
}) => (
  <View style={styles.detailItem}>
    <View style={styles.iconContainer}>
      <Icon source={icon} size={24} color={theme.colors.accent} />
    </View>
    <View style={styles.textContainer}>
      <Text style={[styles.label, { color: theme.colors.text }]}>{label}:</Text>

      <Text style={[styles.value, { color: theme.colors.text }]}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "transparent",
    elevation: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  divider: { marginVertical: 10 },
  loading: { textAlign: "center", fontSize: 18, marginVertical: 20 },
  detailItem: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  iconContainer: { marginRight: 8, marginLeft: 5 },
  textContainer: { flex: 1 },
  label: { fontWeight: "bold", marginRight: 5, fontSize: 18 },
  value: { flex: 1, flexWrap: "wrap", fontSize: 16, marginTop: 5 },
});
