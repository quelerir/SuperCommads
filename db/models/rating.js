const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Book }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Book, { foreignKey: 'book_id' });
    }
  }
  Rating.init(
    {
      ratingvalue: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Rating',
    }
  );
  return Rating;
};
