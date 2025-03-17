const validarName = (req, res, next) => {
    const name = req.params.name
    
    if(name === undefined){
        return res.status(400).json({ message: 'field name_movie is required'})
    }

    if(name === ''){
        return res.status(400).json({ message: 'field name_movie can not be empty'})
    }

    next();
}

const validarData = (req, res, next) => {
    const { data_movie } = req.body 

    if(data_movie === undefined){
        return  res.status(400).json({ message: 'the field data_movie is required'})
    }

    if(data_movie === ''){
        return  res.status(400).json({ message: 'the field data_movie can not be empty'})
    }

    next()
}

const validarImg = (req, res, next) => {
    const { img_movie } = req.body 

    if(img_movie === undefined){
        return  res.status(400).json({ message: 'the field img_movie is required'})
    }

    if(img_movie === ''){
        return  res.status(400).json({ message: 'the field img_movie can not be empty'})
    }

    next()
}


module.exports = {
    validarName,
    validarData,
    validarImg
}