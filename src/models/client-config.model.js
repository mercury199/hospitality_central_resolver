const { DataTypes, Model } = require('sequelize');

class ClientConfig extends Model {}

const initClientConfigModel = (sequelize) => {
  ClientConfig.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      clientCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      starpiurl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      railwayUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ClientConfig',
      tableName: 'client_configs',
      timestamps: true,
    }
  );

  return ClientConfig;
};

module.exports = {
  ClientConfig,
  initClientConfigModel,
};
