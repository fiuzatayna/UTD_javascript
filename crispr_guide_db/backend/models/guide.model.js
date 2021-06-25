module.exports = (sequelize, Sequelize) => {
    const Guide = sequelize.define('guideseq', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gene: {
            type: Sequelize.STRING
        },
        species: {
            type: Sequelize.STRING
        },
        sequence: {
            type: Sequelize.STRING
        },
    });

    return Guide;
}