var listaFilmes = [
  'https://imagens.lelivros.love/2014/01/Download-A-Sele%C3%A7%C3%A3o-The-Selection-Vol-1-Kiera-Cass-em-ePUB-mobi-e-PDF-174x270.jpg',
  'https://imagens.lelivros.love/2014/02/Download-A-Elite-The-Selection-Vol-2-Kiera-Cass-em-ePUB-mobi-e-PDF-174x270.jpg',
  'https://imagens.lelivros.love/2014/06/Download-A-Escolha-A-Selecao-Vol-3-Kiera-Cass-em-ePub-mobi-e-PDF-174x270.jpg',
  'https://imagens.lelivros.love/2015/05/Baixar-Livro-A-Herdeira-A-Selecao-Vol-4-Kiera-Cass-em-PDF-ePub-e-Mobi-174x270.jpg',
  'https://imagens.lelivros.love/2016/05/Baixar-Livro-A-Coroa-A-Selecao-Vol-05-Kiera-Cass-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg',
  'https://imagens.lelivros.love/2014/01/Download-Cidade-dos-Ossos-Os-Instrumentos-Mortais-Vol-1-Cassandra-Clare-em-ePUB-mobi-e-PDF-174x270.jpg',
  'https://imagens.lelivros.love/2014/01/Download-Cidade-das-Cinzas-Os-Instrumentos-Mortais-Vol-2-Cassandra-Clare-em-ePUB-mobi-e-PDF-174x270.jpg',
  'https://imagens.lelivros.love/2014/01/Download-Cidade-De-Vidro-Os-Instrumentos-Mortais-Vol-3-Cassandra-Clare-em-ePUB-mobi-e-PDF-174x270.jpg',
  'https://imagens.lelivros.love/2014/01/Download-Cidade-Dos-Anjos-Ca%C3%ADdos-Os-Instrumentos-Mortais-Vol-4-Cassandra-Clare-em-ePUB-mobi-e-PDF-174x270.jpg',
  'https://imagens.lelivros.love/2014/01/Download-Cidade-das-Almas-Perdidas-Os-Instrumentos-Mortais-Vol-5-Cassandra-Clare-em-ePUB-mobi-e-PDF-174x270.jpg',
  'https://imagens.lelivros.love/2014/07/Download-Cidade-do-Fogo-Celestial-Os-Instrumentos-Mortais-Vol-6-Cassandra-Clare-em-ePUB-mobi-e-pdf-174x270.jpg'
]

var linkTrailer = [
  'https://drive.google.com/file/d/1uW1huxmDZ_CvFVw2MpotO4eWTVRp1Wk8/view?usp=sharing',
  'https://drive.google.com/file/d/1_Iwj2eBvURG_zlMf0VS-_2EvAGSuby-t/view?usp=sharing',
  'https://drive.google.com/file/d/1c8TzYfWfXqlMeB9-j0H1xQaeEEKR35KZ/view?usp=sharing',
  'https://drive.google.com/file/d/17xPfYBIeb7QgmQZiKGt7K0Z_SmFp70T8/view?usp=sharing',
  'https://drive.google.com/file/d/1s8ZW0scwMk3W5Qy0ZppwZnuX6LsPmBG9/view?usp=sharing',
  'https://drive.google.com/file/d/1CYVd6N-Fo56v9VHKRQC8iS74c_4pymKv/view?usp=sharing',
  'https://drive.google.com/file/d/1i8JRgGcREx78hYEKVtmmna3rfS9x-QH8/view?usp=sharing',
  'https://drive.google.com/file/d/1mc-837sqbdU_E3rXEjzJ1f71Yc7UJC-x/view?usp=sharing',
  'https://drive.google.com/file/d/1oc2N9HR6Zj3xFYYD0CXGGchftCDZQZ6T/view?usp=sharing',
  'https://drive.google.com/file/d/18DW0sCphgEWPXe49JT7-UfKw4UlRGx6R/view?usp=sharing',
  'https://drive.google.com/file/d/1QO8EfVPoQik_FgMJDacA4F3mWogtGpeg/view?usp=sharing',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write(
    `<a href='${linkTrailer[i]}' id="teste" target="_blank"><img src='${listaFilmes[i]}'/></a>`
  )
}
