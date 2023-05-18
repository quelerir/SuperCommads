/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   'Users',
    //   [
    //     {
    //       username: 'Алксей',
    //       email: 'aleksey@yandex.ru',
    //       password: '123',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {},
    // );
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          bookname: "Мастер и Маргарита",
          author: "Михаил Булгаков",
          bookannotation:
            'Роман о приходе в Москву дьявола и его свиты, событиях, происходящих в городе и их последствиях для его жителей.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMWij5ghlIGttS2ctX_iQ8BeuFn4CksIRQg&usqp=CAU',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookname: "Война и мир",
          author: "Лев Толстой",
          bookannotation:
            'Роман-эпопея, охватывающий период событий в России во время войн с Наполеоном в начале XIX века и их влияние на жизни героев.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPw2D16WHn0yHlvVU14ciW6ZPT6E-JaH7f-g&usqp=CAU',

          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookname: "Преступление и наказание",
          author: "Федор Достоевский",
          bookannotation:
            'Роман, рассказывающий о студенте Раскольникове, который убивает старушку-процентщицу и сталкивается с моральными и этическими последствиями своего поступка.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoOgz64ms1Jpxa_RSs3mHMDuY5Y14KEH0mPA&usqp=CAU',

          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookname: "Маленький принц",
          author: "Антуан де Сент-Экзюпери",
          bookannotation:

            'Философская сказка о путешествии маленького принца по разным планетам и его встречах с разными странными и удивительными персонажами.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFrEDvC3WeZJ4Ql1gAYR9O9y2IxnvIKqszw&usqp=CAU',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookname: "Герой нашего времени",
          author: "Михаил Лермонтов",
          bookannotation:
            'Роман, состоящий из повестей, рассказывающих о жизни героя Печорина и его внутренней борьбе.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDLbgJTVR1bLMplvwt4tSZCItE-UvaN6D8Q&usqp=CAU',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Books", null, {});
  },
};
