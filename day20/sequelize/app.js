//
//
// const express = require("express");
// const path = require("path");
// const morgan = require("morgan");
// const nunjucks = require("nunjucks");
// const db = require("./models");
//
// const { sequelize } = require("./models");
// const { User, Comment  } = require("./models");
//
// // const {Op} = require("sequelize");
//
// const app = express();
// app.set("port", process.env.PORT || 3001);
// app.set("view engine", "html");
// nunjucks.configure("views", {
//   express: app,
//   watch: true,
// });
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("데이터베이스 연결 성공");
//   })
//   .catch((err) => {
//     console.error(err);
//   });
//
// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Database synchronized");
//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to sync database:", err);
//   });
//
// app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//
// app.use((req, res, next) => {
//   const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//   error.status = 404;
//   next(error);
// });
// app.use((err, req, res) => {
//   res.locals.message = err.message;
//   res.locals.err = process.env.NODE_ENV !== "production" ? err : {};
//   res.status(err.status || 500);
//   res.render("error");
// });
//
// app.listen(app.get("port"), async () => {
//   console.log(app.get("port"), "번 포트에서 대기 중");
//   // User.create({
//   //   name: "zero",
//   //   age: 24,
//   //   married: false,
//   //   comment: "자기소개1",
//   // });
//   // let data = await User.findAll({
//   //   attributes: ["name", "married"],
//   //   where: {
//   //       married: 1,
//   //       age: { [Op.gt]: 30},
//   //   }
//   // });
// //   let data = await User.findAll({
// //   attributes: ["name", "married"],
// //   where: {
// //     [Op.or]: [
// //       { married: false }, // For married being false
// //       { age: { [Op.or]: [30] } } // For age being 30
// //     ]
// //   }
// // });
// //   data = await User.findAll({
// //   attributes: ["id", "name"],
// //       order: [['age', 'DESC']],
// //
// // });
// //   data = await User.findAll({
// //   attributes: ["id", "name"],
// //       order: [['age', 'DESC']],
// //       limit: 1,
// //
// // });
// //   data = await User.findAll({
// //   attributes: ["id", "name"],
// //       order: [['age', 'DESC']],
// //       limit: 1,
// //       offset: 1,
// //
// // });
// //   console.log(data);
// //   User.update(
// //       {
// //           comment: "자기소개3",
// //       },
// //       {
// //           where: {id : 3},
// //       });
// //     User.destory({
// //         where: { id: 3},
// //     });
//     let data = await User.findOne({
//         include: [
//             {
//                 model: Comment,
//                 as: 'Comments',
//             },
//         ],
//     });
//     console.log(data.Comments);
// });
//
// async function fetchComments() {
//     try {
//
//         const [result, metadata] = await sequelize.query('Select * from comments');
//         console.log(result);
//     } catch (error) {
//         console.error('Error fetching comments:', error);  // 오류를 콘솔에 출력
//     }
// }


const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const db = require("./models");
const { sequelize, User, Comment } = db; // 모든 모델과 sequelize를 가져옵니다.

const app = express();
app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

// 데이터베이스와 동기화하고 서버를 시작합니다.
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
    app.listen(app.get("port"), () => {
      console.log(app.get("port"), "번 포트에서 대기 중");
      // 주석 처리된 쿼리 실행 예제
      // fetchComments();
      // 예를 들어 User 모델로 데이터 조회
      findUserWithComments();
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.err = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

async function findUserWithComments() {
  try {
    let userData = await User.findOne({
      include: [
        {
          model: Comment,
          // as: 'userComments', // 모델 관계 설정과 일치해야 합니다.
        },
      ],
    });
    console.log("너 뭐 돼냐?",userData.Comment);
  } catch (error) {
    console.error('Error fetching user with comments:', error);
  }
}

async function fetchComments() {
  try {
    const [result, metadata] = await sequelize.query('SELECT * FROM users');
    console.log(result);
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
}

