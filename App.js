import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const frasesSortudas = [
   "A vida é agora — aproveite cada segundo.",
  "Você é mais forte do que imagina.",
  "Grandes jornadas começam com pequenos passos.",
  "Sorria! O universo retribui.",
  "Confie no processo, mesmo quando for difícil.",
  "Até as estrelas precisam da escuridão para brilhar.",
  "Cada dia é uma nova chance de recomeçar.",
  "Seja luz, mesmo nos dias nublados.",
  "Você está exatamente onde precisa estar agora.",
  "Acredite: o melhor ainda está por vir.",
];

export default function App() {
  const [imagem, setImagem] = useState(require('./assets/biscoito_sem_fundo.png'));
  const [frase, setFrase] = useState('');
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false);

  function quebrarBiscoito() {
    if (!biscoitoQuebrado) {
      const indiceAleatorio = Math.floor(Math.random() * frasesSortudas.length);
      const novaFrase = frasesSortudas[indiceAleatorio];
      setFrase(`"${novaFrase}"`);
      setImagem(require('./assets/biscoitoquebradosemfundo.png'));
      setBiscoitoQuebrado(true);
    }
  }

  function reiniciarBiscoito() {
    setFrase('');
    setImagem(require('./assets/biscoito_sem_fundo.png'));
    setBiscoitoQuebrado(false);
  }

  return (
    <View style={estilos.container}>
      <Image source={imagem} style={estilos.imagem} />
      <Text style={estilos.textoFrase}>{frase}</Text>

      {!biscoitoQuebrado ? (
        <TouchableOpacity style={estilos.botao} onPress={quebrarBiscoito}>
          <Text style={estilos.textoBotao}>Quebrar o Biscoito</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={estilos.botao} onPress={reiniciarBiscoito}>
          <Text style={estilos.textoBotao}>Quebrar Mais Um</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // fundo escuro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagem: {
    width: 220,
    height: 220,
    marginBottom: 25,
    resizeMode: 'contain',
    borderRadius: 12,
  },
  textoFrase: {
    fontSize: 22,
    color: '#E0E0E0', // texto claro
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 25,
    lineHeight: 32,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#1F1F1F', // botão escuro
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#333',
  },
  textoBotao: {
    color: '#FFB74D', // cor vibrante no texto do botão
    fontSize: 20,
    fontWeight: 'bold',
  },
});