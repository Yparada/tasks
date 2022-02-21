import { Sequelize } from "sequelize";
import { sequelize } from "../database/database";

const UserProject = sequelize.define('user_projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    projectid: {
        type: Sequelize.INTEGER
    },
    userid: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default UserProject;