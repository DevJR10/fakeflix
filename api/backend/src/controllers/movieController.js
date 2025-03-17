const tasks = require('../models/movieModels')


const getAll = async (req, res) => {
    const retornoMovie = await tasks.getAll()
    return res.status(200).json(retornoMovie)
}

const getMovie = async (req, res) => {
    const name = req.params.name

    const retornoMovie = await tasks.getMovie(name)
    return res.status(200).json(retornoMovie)
}

const getGenero = async (req, res) => {
    const name = req.params.name

    const retornoGenero = await tasks.getGenero(name)
    return res.status(200).json(retornoGenero)
}

const addAll = async (req, res) => {
    const addMovie = await tasks.addAll(req.body)
    return res.status(201).json(addMovie)
}

module.exports = {
    getAll,
    addAll,
    getGenero,
    getMovie
}