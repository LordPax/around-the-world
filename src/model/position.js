import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
    class Position extends Model {}

    Position.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            firstname: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            lastname: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            location: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Position',
            tableName: 'position',
            timestamps: true,
        },
    );

    return Position;
};
