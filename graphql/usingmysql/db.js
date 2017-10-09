import Sequelize from 'sequelize';
import Lodash from 'lodash';
import Faker from 'faker';


const Conn = new Sequelize(
    'graphqltrial',
    'root',
    'admin',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

const Person = Conn.define('person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

});

const Post = Conn.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Person.hasMany(Post);
Post.belongsTo(Person);

Conn.sync({})
// .then(()=>{
//     Lodash.times(10, () => {
//         return Person.create({
//             firstName: Faker.name.firstName(),
//             lastName: Faker.name.lastName(),
//             email: Faker.internet.email(),
//         }).then(person => {
//             return person.createPost({
//                 title: 'Sample title by '+ person.firstName,
//                 content: Faker.company.catchPhrase(),
//             })
//         })
//     });
// });

export default Conn;