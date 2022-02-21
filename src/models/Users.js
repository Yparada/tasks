import { Sequelize } from "sequelize";
import { sequelize } from '../database/database';

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default User;