import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList />
      <View style={style.incidentList}>
        <View style={style.incident}>
          <Text style={style.incidentProperty}>ONG:</Text>
          <Text style={style.incidentValue}>APAD</Text>

          <Text style={style.incidentProperty}>CASO:</Text>
          <Text style={style.incidentValue}>cadelinha atropelada</Text>

          <Text style={style.incidentProperty}>VALOR:</Text>
          <Text style={style.incidentValue}>R$ 120,00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </TouchableOpacity>
        </View>

        <View style={style.incident}>
          <Text style={style.incidentProperty}>ONG:</Text>
          <Text style={style.incidentValue}>APAD</Text>

          <Text style={style.incidentProperty}>CASO:</Text>
          <Text style={style.incidentValue}>cadelinha atropelada</Text>

          <Text style={style.incidentProperty}>VALOR:</Text>
          <Text style={style.incidentValue}>R$ 120,00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </TouchableOpacity>
        </View>

        <View style={style.incident}>
          <Text style={style.incidentProperty}>ONG:</Text>
          <Text style={style.incidentValue}>APAD</Text>

          <Text style={style.incidentProperty}>CASO:</Text>
          <Text style={style.incidentValue}>cadelinha atropelada</Text>

          <Text style={style.incidentProperty}>VALOR:</Text>
          <Text style={style.incidentValue}>R$ 120,00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
