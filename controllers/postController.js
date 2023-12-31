const { Post, User, Sequelize } = require('../models/index.js');
const { Op } = Sequelize;

const PostController = {

    create(req, res) {

        Post.create(req.body)

            .then(post => res.status(201).send({ message: 'Publicación creada con éxito', post }))

            .catch(console.error)

    }, getById(req, res) {

        Post.findByPk(req.params.id, {

            include: [{ model: User, attributes: ['name'] }]

        })

            .then(post => res.send(post))

    }, getOneByName(req, res) {

        Post.findOne({

            where: {

                title: {

                    [Op.like]: `%${req.params.title}%`,

                },

            },

            include: [User],

        }).then((post) => res.send(post))

    },
    async delete(req, res) {

        await Post.destroy({

            where: {

                id: req.params.id

            }

        })

        res.send(

            'La publicación ha sido eliminada con éxito'

        )

    },

}