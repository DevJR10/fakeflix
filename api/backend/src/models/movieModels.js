const connection = require('./connection')

const getAll = async () => {
    const [sql] = await connection.execute("SELECT * FROM movies")
    return sql
}

const getMovie = async (movie) => {
    const [sql] = await connection.execute("SELECT * FROM movies WHERE name_movie = ?", [movie])
    return sql
}

const getGenero = async (genero) => {
    const [sql] = await connection.execute("SELECT * FROM movies WHERE genero_movie = ?", [genero])
    return sql
}

const addAll = async (task) => {
    const { name_movie } = task
    const [sql] = await connection.execute("INSERT INTO movies(name_movie, data_movie, img_movie) VALUES(?, ?, ?)", [name_movie, '27/10;2004', 'img'])
    return { insertId: sql.insertId}
}

module.exports = {
    getAll,
    getMovie,
    getGenero,
    addAll
}