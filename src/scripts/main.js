const pianoKeys = document.querySelectorAll(".piano-keys .key");
// variavel para ativar/desativar teclas
const keysCheck = document.querySelector(".keys-check input")
// variavel do volume
const volumeSlider = document.querySelector(".volume-slider input")
// criando a variavel de mapeamento de teclas
let mapedKeys =[]
// variavel que adiciona um novo Audio no caminho passado
let audio = new Audio("src/tunes/a.wav")

// variave que pega os audio
const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play()
  // selecina os elementos data-key dentro do html
  const clickedKey = document.querySelector(`[data-key="${key}"]`)
  // adiciona a animacao de acorde a tecla clicada
  clickedKey.classList.add("active")
  // remove a animacao quando o som termina
  setTimeout(() => clickedKey.classList.remove("active"), 150); 
}
// adiciona o evento de click no piano
pianoKeys.forEach((key) => {
  // adiciona o evento de click na tecla retornando as teclas clicadas
  key.addEventListener("click", () => playTune(key.dataset.key));
  // adiciona a tecla ao mapa
  mapedKeys.push(key.dataset.key)
})
// variavel para pegar os comandos do teclado
document.addEventListener("keydown", (event) => {
  if(mapedKeys.includes(event.key)){
    playTune(event.key)
  }  
})
const handleVolume = (event) => {
  // converte o valor do slider para um valor de volume entre 0 e 1
  audio.volume = event.target.value 
}
// ajusta o volume do som
volumeSlider.addEventListener("input", handleVolume)

const showHideKeys = () => {
  // adiciona ou remove a classe hide para esconder as teclas do piano
  pianoKeys.forEach(key => key.classList.toggle("hide"))
}
// adiciona o evento de click na checkbox para mostrar/esconder as teclas
keysCheck.addEventListener("click", showHideKeys)