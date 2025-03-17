const formGenero = document.querySelector(".form-generos");
const formMovie = document.querySelector(".form-movies");
const moviesGrid = document.querySelector(".movies-grid");
const span = document.querySelector(".not-found");

const fetchAPI = async () => {
  const response = await fetch("http://localhost:3000/movies");
  return response.json();
};

const createElement = (name, data, img) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("view-movies");

  const p = document.createElement("p");
  p.innerText = name;

  const imagem = document.createElement("img");
  if (imagem.src === "") {
    imagem.src = "assets/pontointerrogacao.avif";
  } else {
    imagem.src = img;
  }

  moviesGrid.appendChild(newDiv);
  newDiv.appendChild(p);
  newDiv.appendChild(imagem);

  if (name === "") {
    return undefined;
  }

  return newDiv;
};

const addElement = async (element) => {
  element.preventDefault();

  await fetch();
};

const searchElement = async (element) => {
  element.preventDefault();
  span.classList.remove("ativo");

  const input = document.querySelector(".form-movies input");
  const nome = input.value.trim().replace(/^\/+/, "");

  if (nome === "") {
    loadElement();
    return null;
  }

  const response = await fetch(`http://localhost:3000/movies/${nome}`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  const [dados] = await response.json();

  if (!dados || dados.length === 0) {
    moviesGrid.innerHTML = "";
    span.classList.add("ativo");
    moviesGrid.appendChild(span);
  } else {
    moviesGrid.innerHTML = "";

    const elementCreated = createElement(
      dados.name_movie,
      dados.data_movie,
      dados.img_movie
    );

    moviesGrid.appendChild(elementCreated);
  }
};

const searchGenero = async (element) => {
  element.preventDefault();

  const radioSelecionado = document.querySelector(
    'input[name="genero"]:checked'
  );

  if (radioSelecionado) {
    const textRadio = radioSelecionado.value;
    const response = await fetch(`http://localhost:3000/generos/${textRadio}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });

    const [dados] = await response.json();

    console.log(textRadio)

    if (!dados || dados.length === 0) {
      moviesGrid.innerHTML = "";
      span.classList.add("ativo");
      moviesGrid.appendChild(span);
    } else {
      moviesGrid.innerHTML = "";

      const elementCreated = createElement(
        dados.name_movie,
        dados.data_movie,
        dados.img_movie
      );

      moviesGrid.appendChild(elementCreated);
    }
  }
};

const loadElement = async () => {
  const dados = await fetchAPI();

  moviesGrid.innerHTML = ''
  dados.forEach((movie) => {
    createElement(movie.name_movie, movie.data_movie, movie.img_movie);
  });
};

formGenero.addEventListener("submit", searchGenero);
formMovie.addEventListener("submit", searchElement);
loadElement();
