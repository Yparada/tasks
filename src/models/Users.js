import { Sequelize } from "sequelize";
import { sequelize } from '../database/database';
import UserProject from "./UserProjects";

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(40)
    },
    email: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

User.hasMany(UserProject, { foreignKey: 'userid', sourceKey: 'id' });
UserProject.belongsTo(User, { foreignKey: 'userid', sourceKey: 'id'});

export default User;