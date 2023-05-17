const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Rating, Favorite }) {
      this.hasMany(Comment, { foreignKey: 'book_id' });
      this.hasMany(Rating, { foreignKey: 'book_id' });
      this.hasMany(Favorite, { foreignKey: 'book_id' });
    }
  }
  Book.init(
    {
      bookname: DataTypes.STRING,
      author: DataTypes.STRING,
      bookannotation: DataTypes.TEXT,
      img: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
